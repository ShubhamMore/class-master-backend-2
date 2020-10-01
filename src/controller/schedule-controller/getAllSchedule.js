const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const getAllSchedule = async (req, res) => {
  try {
    const schedules = await Schedule.aggregate([
      {
        $match: {
          branch: req.body.branch,
          category: req.body.category,
          course: req.body.course,
          batch: req.body.batch,
        },
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
          _id: true,
          date: true,
          startTime: true,
          endTime: true,
          subject: true,
          teacher: '$name',
          topic: true,
          sessionType: true,
          isBetween: {
            $and: [
              {
                $gte: [
                  {
                    $dateFromString: {
                      dateString: '$date',
                    },
                  },
                  {
                    $dateFromString: {
                      dateString: req.body.startDate,
                    },
                  },
                ],
              },
              {
                $lte: [
                  {
                    $dateFromString: {
                      dateString: '$date',
                    },
                  },
                  {
                    $dateFromString: {
                      dateString: req.body.endDate,
                    },
                  },
                ],
              },
            ],
          },
        },
      },
      {
        $match: {
          isBetween: true,
        },
      },
    ]);

    res.status(200).send(schedules);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getAllSchedule;
