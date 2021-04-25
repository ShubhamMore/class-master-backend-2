const AssignmentSubmission = require('../../models/assignment-submission.model');
const Assignment = require('../../models/assignment.model');

const mongoose = require('mongoose');
const request = require('request-promise');

const errorHandler = require('../../handler/error.handler');

const saveAssignmentSubmissionGrades = async (req, res) => {
  try {
    const body = req.body;

    const assignmentSubmission = await AssignmentSubmission.findByIdAndUpdate(body._id, body);

    if (!assignmentSubmission) {
      throw new Error('Assignment Submission Not Found');
    }

    res.status(200).send({ success: true });

    const assinmentDetails = await Assignment.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(assignmentSubmission.assignment) } },
      {
        $addFields: {
          courseId: { $toObjectId: '$course' },
          batchId: { $toObjectId: '$batch' },
          subjectId: { $toObjectId: '$subject' },
        },
      },

      {
        $lookup: {
          from: 'courses',
          let: { course: '$courseId', subject: '$subjectId' },
          pipeline: [
            {
              $match: { $expr: { $eq: ['$_id', '$$course'] } },
            },
            { $project: { basicDetails: 1, subjects: 1, _id: 0 } },
            { $addFields: { subjectId: '$$subject' } },
            {
              $project: {
                basicDetails: 1,
                tempSubject: {
                  $filter: {
                    input: '$subjects',
                    as: 'subject',
                    cond: {
                      $eq: ['$$subject._id', '$subjectId'],
                    },
                  },
                },
              },
            },
            {
              $replaceRoot: {
                newRoot: { $mergeObjects: [{ $arrayElemAt: ['$tempSubject', 0] }, '$$ROOT'] },
              },
            },
            {
              $project: {
                _id: 0,
                subjectName: '$subject',
                courseName: '$basicDetails.courseName',
              },
            },
          ],
          as: 'courses',
        },
      },
      {
        $lookup: {
          from: 'batches',
          let: { batch: '$batchId' },
          pipeline: [
            {
              $match: { $expr: { $eq: ['$_id', '$$batch'] } },
            },
            { $project: { basicDetails: 1, _id: 0 } },
            { $project: { batchName: '$basicDetails.batchName' } },
          ],
          as: 'batches',
        },
      },

      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              {
                $arrayElemAt: ['$courses', 0],
              },
              '$$ROOT',
            ],
          },
        },
      },

      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              {
                $arrayElemAt: ['$batches', 0],
              },
              '$$ROOT',
            ],
          },
        },
      },
      {
        $project: {
          courses: 0,
          batches: 0,
          courseId: 0,
          batchId: 0,
          subjectId: 0,
          __v: 0,
        },
      },
    ]);

    if (assinmentDetails[0]) {
      const _assignment = assinmentDetails[0];

      const notification = {
        receiverId: assignmentSubmission.student,
        title: 'Your assignment has beed Graded',
        message: `Your Assignment on topic ${_assignment.topic} of Subject ${_assignment.subjectName} of course ${_assignment.courseName} has beed graded by ${body.grades} out of ${_assignment.totalGrades}`,
      };

      const options = {
        method: 'POST',
        url: process.env.API_URI + '/sendNotification',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + process.env.SERVER_TOKEN,
        },
        body: notification,
        json: true,
      };

      try {
        await request(options);
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveAssignmentSubmissionGrades;
