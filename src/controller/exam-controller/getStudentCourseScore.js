const StudentCourse = require('../../models/student-course.model');
const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourseScore = async (req, res) => {
  try {
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

    const scores = await Exam.aggregate([
      {
        $match: query,
      },
      {
        $unwind: '$marks',
      },
      {
        $match: {
          'marks.student': req.body.student,
        },
      },
      {
        $project: {
          _id: 0,
          examTitle: 1,
          outOfMarks: 1,
          passingMarks: 1,
          date: 1,
          time: 1,
          duration: 1,
          course: {
            $toObjectId: '$course',
          },
          batch: {
            $toObjectId: '$batch',
          },
          subject: {
            $toObjectId: '$subject',
          },
          mark: '$marks',
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
        },
      },
      {
        $addFields: {
          course: {
            $arrayElemAt: ['$courses', 0],
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
        },
      },
      {
        $project: {
          batch: '$batch.basicDetails.batchName',
          course: '$course.basicDetails.courseName',
          examTitle: 1,
          outOfMarks: 1,
          passingMarks: 1,
          date: 1,
          time: 1,
          duration: 1,
          subject: 1,
          mark: 1,
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
            $mergeObjects: ['$mark', '$$ROOT'],
          },
        },
      },
      {
        $project: {
          _id: 0,
          mark: 0,
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

    res.status(200).send(scores);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseScore;
