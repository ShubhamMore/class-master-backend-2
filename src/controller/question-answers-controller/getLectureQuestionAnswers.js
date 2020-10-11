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
      // {
      //   $lookup: {
      //     from: {
      //       $cond: {
      //         if: { $imsMasterId: { $in: [{ $regex: /INST/ }] } },
      //         then: 'institutes',
      //         else: {
      //           $cond: {
      //             if: { $imsMasterId: { $in: [{ $regex: /EMP/ }] } },
      //             then: 'employees',
      //             else: 'students',
      //           },
      //         },
      //       },
      //       localField: 'imsMasterId', // field in the lectureQuestions collection
      //       foreignField: 'imsMasterId', // field in the lectureQuestionAnswers collection
      //       as: 'users',
      //     },
      //   },
      // },
    ]);

    res.status(200).send(lectureQuestionsAnswers);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureQuestionAnswers;
