const LectureQuestion = require('../../models/lecture-question.model');
const errorHandler = require('../../handler/error.handler');

const getLectureQuestionAnswers = async (req, res) => {
  try {
    const lectureQuestionsAnswers = await LectureQuestion.aggregate([
      {
        $match: {
          branch: req.body.branch,
          category: req.body.category,
          course: req.body.course,
          batch: req.body.batch,
          lecture: req.body.lecture,
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: 'createdBy',
          foreignField: 'imsMasterId',
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
    ]);

    res.status(200).send(lectureQuestionsAnswers);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureQuestionAnswers;
