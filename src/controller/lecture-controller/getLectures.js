const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const getLectures = async (req, res) => {
  try {
    const query = {
      branch: req.body.branch,
      category: req.body.category,
      date: req.body.date,
    };

    if (req.body.course) {
      query.course = req.body.course;
    }

    if (req.body.batch) {
      query.batch = req.body.batch;
    }

    const lectures = await Schedule.aggregate([
      {
        $match: query,
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'teacher', // field in the schedules collection
          foreignField: 'imsMasterId', // field in the employees collection
          as: 'teachers',
        },
      },

      {
        $replaceRoot: {
          newRoot: { $mergeObjects: [{ $arrayElemAt: ['$teachers', 0] }, '$$ROOT'] },
        },
      },
      { $project: { teachers: 0 } },
      {
        $project: {
          branch: 1,
          category: 1,
          course: 1,
          batch: 1,
          subject: 1,
          date: 1,
          startTime: 1,
          endTime: 1,
          topic: 1,
          teacher: '$name',
          sessionType: 1,
          status: 1,
        },
      },
    ]);

    res.status(200).send(lectures);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectures;
