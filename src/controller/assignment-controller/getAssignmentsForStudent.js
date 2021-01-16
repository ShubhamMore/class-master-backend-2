const Assignment = require('../../models/assignment.model');
const errorHandler = require('../../handler/error.handler');

const getAssignmentsForStudent = async (req, res) => {
  try {
    const query = {
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
      batch: req.body.batch,
    };

    if (req.body.subject && req.body.subject !== '') {
      query.subject = req.body.subject;
    }

    let date = null;

    if (req.body.year !== '' && req.body.month === '') {
      date = new RegExp('.*' + req.body.year + '.*');
    }

    if (req.body.month !== '' && req.body.year !== '') {
      date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
    }

    if (date) {
      query.date = date;
    }

    const assignments = await Assignment.aggregate([
      {
        $match: query,
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'generatedBy', // field in the assignments collection
          foreignField: 'imsMasterId', // field in the employees collection
          as: 'employees',
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: 'generatedBy', // field in the assignments collection
          foreignField: 'imsMasterId', // field in the employees collection
          as: 'institutes',
        },
      },
      {
        $addFields: {
          teachers: {
            $setUnion: ['$institutes', '$employees'],
          },
        },
      },
      {
        $addFields: {
          teacher: { $arrayElemAt: ['$teachers', 0] },
        },
      },
      { $project: { teachers: 0 } },
      {
        $project: {
          _id: 1,
          branch: 1,
          category: 1,
          course: 1,
          batch: 1,
          subject: 1,
          topic: 1,
          description: 1,
          date: 1,
          submissionDate: 1,
          totalGrades: 1,
          generatedBy: 1,
          fileName: 1,
          fileSize: 1,
          fileType: 1,
          secureUrl: 1,
          publicId: 1,
          generatedByName: '$teacher.name',
          status: 1,
        },
      },
      {
        $lookup: {
          from: 'assignmentsubmissions',
          let: { assignmentId: { $toString: '$_id' } },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    {
                      $eq: ['$assignment', '$$assignmentId'],
                    },
                    {
                      $eq: ['$student', req.user.imsMasterId],
                    },
                  ],
                },
              },
            },
          ],
          as: 'assignmentSubmissions',
        },
      },
      {
        $addFields: {
          submission: {
            $arrayElemAt: ['$assignmentSubmissions', 0],
          },
        },
      },
      {
        $project: {
          assignmentSubmissions: 0,
        },
      },
    ]);

    res.status(200).send(assignments);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAssignmentsForStudent;
