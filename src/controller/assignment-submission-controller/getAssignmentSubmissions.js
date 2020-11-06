const Assignment = require('../../models/assignment.model');
const StudentCourse = require('../../models/student-course.model');

const errorHandler = require('../../handler/error.handler');

const getAssignmentSubmissions = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.body.assignment);

    if (!assignment) {
      throw new Error('Assignment Not Found');
    }

    const assignmentSubmissions = await StudentCourse.aggregate([
      {
        $match: {
          branch: assignment.branch,
          course: assignment.course,
          batch: assignment.batch,
        },
      },
      {
        $lookup: {
          from: 'students',
          localFields: 'student',
          foreignField: 'imsMasterId',
          as: 'students',
        },
      },
      {
        $addFields: {
          students: {
            $arrayElemAt: ['$students', 0],
          },
        },
      },
      {
        $lookup: {
          from: 'assignmentsubmissions',
          localFields: 'student',
          foreignField: 'student',
          as: 'assignmentSubmissions',
        },
      },
      {
        $addFields: {
          submission: {
            $arrayElemAt: [
              {
                $filter: {
                  input: '$assignmentSubmissions',
                  as: 'assignmentSubmission',
                  cond: {
                    $eq: ['$$assignmentSubmission.assignment', assignment._id],
                  },
                },
              },
              0,
            ],
          },
        },
      },
      {
        $project: {
          _id: 1,
          student: 1,
          studentName: '$students.name',
          submission: 1,
        },
      },
    ]);

    res.status(200).send(assignmentSubmissions);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAssignmentSubmissions;
