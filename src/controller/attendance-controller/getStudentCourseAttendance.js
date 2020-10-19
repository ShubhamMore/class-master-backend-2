const StudentCourse = require('../../models/student-course.model');
const Attendance = require('../../models/attendance.model');
const errorHandler = require('../../handler/error.handler');

const getStudentsCourseAttendance = async (req, res) => {
  try {
    console.log(req.body);
    const studentCourse = await StudentCourse.findById(req.body.studentCourse);

    if (!studentCourse) {
      throw new Error('Student Course Not Found');
    }

    const query = {
      branch: studentCourse.branch,
      category: studentCourse.category,
      course: studentCourse.course,
      batch: studentCourse.batch,
    };

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

    if (req.body.subject !== '') {
      query.subject = req.body.subject;
    }

    const attendance = await Attendance.aggregate([
      {
        $match: query,
      },
      {
        $unwind: '$attendance',
      },
      {
        $match: {
          'attendance.student': req.body.student,
        },
      },
      {
        $project: {
          _id: 0,
          course: {
            $toObjectId: '$course',
          },
          batch: {
            $toObjectId: '$batch',
          },
          lecture: {
            $toObjectId: '$lecture',
          },
          subject: {
            $toObjectId: '$subject',
          },
          atten: '$attendance',
        },
      },
      {
        $lookup: {
          from: 'batches',
          localField: 'batch',
          foreignField: '_id',
          as: 'batches',
        },
      },
      {
        $lookup: {
          from: 'schedules',
          localField: 'lecture',
          foreignField: '_id',
          as: 'lectures',
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
          batch: 0,
          course: 0,
          lecture: 0,
        },
      },
      {
        $addFields: {
          course: {
            $arrayElemAt: ['$courses', 0],
          },
          lecture: {
            $arrayElemAt: ['$lectures', 0],
          },
          batch: {
            $arrayElemAt: ['$batches', 0],
          },
        },
      },
      {
        $project: {
          batches: 0,
          courses: 0,
          lectures: 0,
        },
      },
      {
        $project: {
          batch: '$batch.basicDetails.batchName',
          course: '$course.basicDetails.courseName',
          topic: '$lecture.topic',
          date: '$lecture.date',
          startTime: '$lecture.startTime',
          endTime: '$lecture.endTime',
          subject: 1,
          atten: 1,
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
          subject: 0,
        },
      },
      {
        $addFields: {
          subject: {
            $arrayElemAt: ['$subjects', 0],
          },
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ['$atten', '$$ROOT'],
          },
        },
      },
      {
        $project: {
          _id: 0,
          atten: 0,
          subjects: 0,
          status: 0,
          student: 0,
        },
      },
      {
        $addFields: {
          subject: '$subject.subject',
        },
      },
    ]);

    res.status(200).send(attendance);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentsCourseAttendance;
