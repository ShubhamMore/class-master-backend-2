const Exam = require('../../models/exam.model');
const OnlineExamResult = require('../../models/online-exam-result.model');
const OnlineExamQuestion = require('../../models/online-exam-question.model');
const OnlineExam = require('../../models/online-exam.model');
const errorHandler = require('../../handler/error.handler');

const getExamStatus = async (studentMarks, totalMarks, passingMarks) => {
  const percentage = (studentMarks * 100) / +totalMarks;
  if (percentage > +passingMarks) {
    return true;
  }
  return false;
};

const saveOnlineExamResult = async (req, res) => {
  try {
    const onlineExam = await OnlineExam.findById(req.body.onlineExam);

    if (!onlineExam) {
      throw new Error('No Online Exam Found');
    }

    let onlineExamResult = await OnlineExamResult.findOne({
      onlineExam: req.body.onlineExam,
      student: req.user.imsMasterId,
    });

    if (onlineExamResult) {
      res.status(200).send({ onlineExamResult, type: 1 });
    } else {
      const student = await Exam.aggregate([
        {
          $match: {
            onlineExam: req.body.onlineExam,
          },
        },
        {
          $lookup: {
            from: 'studentcourses',
            let: {
              branchId: '$branch',
              categoryId: '$category',
              courseId: '$course',
              batchId: '$batch',
            },

            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$branch', '$$branchId'] },
                      { $eq: ['$category', '$$categoryId'] },
                      { $eq: ['$course', '$$courseId'] },
                      { $eq: ['$batch', '$$batchId'] },
                      { $eq: ['$student', req.user.imsMasterId] },
                    ],
                  },
                },
              },
              { $project: { _id: 0, rollNumber: 1 } },
            ],
            as: 'students',
          },
        },
        {
          $addFields: {
            student: { $arrayElemAt: ['$students', 0] },
          },
        },
        {
          $project: {
            _id: 0,
            rollNumber: '$student.rollNumber',
          },
        },
      ]);

      if (student.length <= 0) {
        throw new Error('Student Course Not Found');
      }

      const studentQuestionAnswers = req.body.studentQuestionAnswers;

      let studentMarks = 0;
      let correctAnswerCount = 0;
      let wrongAnswerCount = 0;

      for (const curStudentQuestionAnswers of studentQuestionAnswers) {
        const question = await OnlineExamQuestion.findById(curStudentQuestionAnswers.questionId, {
          answers: 1,
        });

        const answers = question.answers;

        const correctAnswers = new Array();

        for (const curAns of answers) {
          if (curAns.isCorrect) {
            correctAnswers.push(curAns._id.toString());
          }
        }

        let marks = +onlineExam.eachQuestionMarks;

        for (const id of curStudentQuestionAnswers.answerIds) {
          if (!correctAnswers.includes(id)) {
            marks = 0;
          }
        }

        for (const id of correctAnswers) {
          if (!curStudentQuestionAnswers.answerIds.includes(id)) {
            marks = 0;
          }
        }

        console.log(marks);

        if (marks) {
          correctAnswerCount++;
        } else {
          wrongAnswerCount++;
        }

        studentMarks += marks;
      }

      onlineExamResult = {
        onlineExam: onlineExam._id,
        unAnsweredQuestions: +onlineExam.totalQuestions - correctAnswerCount - wrongAnswerCount,
        answeredQuestions: correctAnswerCount + wrongAnswerCount,
        correctAnswers: correctAnswerCount,
        wrongAnswers: wrongAnswerCount,
        student: req.user.imsMasterId,
        marks: studentMarks,
        status: await getExamStatus(studentMarks, onlineExam.totalMarks, onlineExam.passingMarks),
      };

      const exam = await Exam.findOneAndUpdate(
        { onlineExam: req.body.onlineExam },
        {
          $push: {
            marks: {
              student: onlineExamResult.student,
              rollNumber: student[0].rollNumber,
              marks: onlineExamResult.marks,
            },
          },
        }
      );

      if (!exam) {
        throw new Error('Exam Not Found');
      }

      const newOnlineExamResult = new OnlineExamResult(onlineExamResult);
      await newOnlineExamResult.save();

      res.status(201).send({
        onlineExamResult: newOnlineExamResult,
        type: 0,
      });
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveOnlineExamResult;
