const LectureQuestion = require('../../models/lecture-question.model');
const mongoose = require('mongoose');
const errorHandler = require('../../handler/error.handler');

const getLectureQuestionAnswer = async (req, res) => {
  try {
    const lectureQuestionAnswers = await LectureQuestion.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.id),
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: 'createdBy', // field in the lectureQuestions collection
          foreignField: 'imsMasterId', // field in the lectureQuestionAnswers collection
          as: 'instituteUser',
        },
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'createdBy', // field in the lectureQuestions collection
          foreignField: 'imsMasterId', // field in the lectureQuestionAnswers collection
          as: 'employeeUser',
        },
      },
      {
        $lookup: {
          from: 'students',
          localField: 'createdBy', // field in the lectureQuestions collection
          foreignField: 'imsMasterId', // field in the lectureQuestionAnswers collection
          as: 'studentUser',
        },
      },
      {
        $addFields: {
          createdUser: {
            $setUnion: ['$instituteUser', '$employeeUser', '$studentUser'],
          },
        },
      },
      {
        $project: {
          instituteUser: 0,
          employeeUser: 0,
          studentUser: 0,
          'createdUser._id': 0,
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [{ $arrayElemAt: ['$createdUser', 0] }, '$$ROOT'],
          },
        },
      },
      {
        $project: {
          createdUser: 0,
        },
      },
      {
        $project: {
          name: 1,
          branch: 1,
          category: 1,
          course: 1,
          batch: 1,
          lecture: 1,
          question: 1,
          createdBy: 1,
          createdAt: 1,
          editedAt: 1,
          status: 1,
        },
      },
      {
        $lookup: {
          from: 'lecturequestionanswers',
          let: {
            question: {
              $toString: '$_id',
            },
          },
          pipeline: [
            {
              $match: {
                question: req.body.id,
              },
            },
            {
              $lookup: {
                from: 'institutes',
                localField: 'createdBy', // field in the lectureQuestions collection
                foreignField: 'imsMasterId', // field in the lectureQuestionAnswers collection
                as: 'instituteUser',
              },
            },
            {
              $lookup: {
                from: 'employees',
                localField: 'createdBy', // field in the lectureQuestions collection
                foreignField: 'imsMasterId', // field in the lectureQuestionAnswers collection
                as: 'employeeUser',
              },
            },
            {
              $lookup: {
                from: 'students',
                localField: 'createdBy', // field in the lectureQuestions collection
                foreignField: 'imsMasterId', // field in the lectureQuestionAnswers collection
                as: 'studentUser',
              },
            },
            {
              $addFields: {
                createdUser: {
                  $setUnion: ['$instituteUser', '$employeeUser', '$studentUser'],
                },
              },
            },
            {
              $project: {
                instituteUser: 0,
                employeeUser: 0,
                studentUser: 0,
                'createdUser._id': 0,
              },
            },
            {
              $replaceRoot: {
                newRoot: {
                  $mergeObjects: [{ $arrayElemAt: ['$createdUser', 0] }, '$$ROOT'],
                },
              },
            },
            {
              $project: {
                createdUser: 0,
              },
            },
            {
              $project: {
                name: 1,
                branch: 1,
                category: 1,
                course: 1,
                batch: 1,
                lecture: 1,
                question: 1,
                answer: 1,
                createdBy: 1,
                createdAt: 1,
                editedAt: 1,
                status: 1,
              },
            },
          ],
          as: 'answers',
        },
      },
    ]);

    if (!lectureQuestionAnswers[0]) {
      throw new Error('No Lecture Question Available');
    }

    res.status(200).send(lectureQuestionAnswers[0]);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureQuestionAnswer;
