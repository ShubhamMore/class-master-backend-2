const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const getLecturesForStudent = async (req, res) => {
  try {
    const lectures = await Schedule.aggregate([
      {
        $match: {
          branch: req.body.branch,
          category: req.body.category,
          course: req.body.course,
          batch: req.body.batch,
          date: req.body.date,
          status: true,
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
        $addFields: {
          courseId: { $toObjectId: '$course' },
          subjectId: { $toObjectId: '$subject' },
        },
      },
      {
        $lookup: {
          from: 'courses',
          localField: 'courseId', // field in the schedules collection
          foreignField: '_id', // field in the employees collection
          as: 'courses',
        },
      },
      {
        $addFields: {
          myCourse: { $arrayElemAt: ['$courses', 0] },
        },
      },
      {
        $addFields: {
          mySubject: {
            $filter: {
              input: '$myCourse.subjects',
              as: 'subject',
              cond: {
                $eq: ['$$subject._id', '$subjectId'],
              },
            },
          },
        },
      },
      {
        $addFields: {
          mySubject: { $arrayElemAt: ['$mySubject', 0] },
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
          subject: '$mySubject.subject',
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

    console.log(lectures);

    res.status(200).send(lectures);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLecturesForStudent;
