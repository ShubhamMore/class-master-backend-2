const Batch = require('../../models/batch.model');
const mongoose = require('mongoose');
const errorHandler = require('../../handler/error.handler');

const getBatchSubjects = async (req, res) => {
  try {
    const subjects = await Batch.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.batch),
        },
      },
      {
        $unwind: '$subjects',
      },
      {
        $project: {
          course: {
            $toObjectId: '$course',
          },
          subject: {
            $toObjectId: '$subjects.subject',
          },
        },
      },
      {
        $lookup: {
          from: 'courses',
          localField: 'course',
          foreignField: '_id',
          as: 'courses',
        },
      },
      {
        $project: {
          course: 0,
        },
      },
      {
        $addFields: {
          course: {
            $arrayElemAt: ['$courses', 0],
          },
        },
      },
      {
        $project: {
          subjects: {
            $filter: {
              input: '$course.subjects',
              as: 'curSubject',
              cond: {
                $eq: ['$$curSubject._id', '$subject'],
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              {
                $arrayElemAt: ['$subjects', 0],
              },
              '$$ROOT',
            ],
          },
        },
      },
      {
        $project: {
          subjects: 0,
        },
      },
    ]);

    res.status(200).send(subjects);
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = getBatchSubjects;
