const Branch = require('../../models/branch.model');
const BranchStorage = require('../../models/branch-storage.model');
const BranchSMS = require('../../models/branch-sms.model');
const Course = require('../../models/course.model');
const BranchEmployee = require('../../models/branch-employee.model');
const BranchStudent = require('../../models/branch-student.model');
const Lead = require('../../models/lead.model');
const Schedule = require('./../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const getDate = (d) => {
  d = new Date(d);
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const getUpToDate = (d) => {
  const date = new Date(d);
  date.setDate(date.getDate() + 3);
  return date;
};

const getBranchDashboardForEmployee = async (req, res) => {
  try {
    if (req.body.role === 'manager') {
      const branch = await Branch.findById(req.body.branch, { status: 1, currentPlanDetails: 1 });

      if (!branch) {
        throw new Error('Branch Not Found');
      } else if (!branch.status) {
        throw new Error(
          'Your membership is expired, Branch is now Inactive, Please renew your plan'
        );
      }

      const branchStorage = BranchStorage.findOne({ branch: req.body.branch });
      const activeCourses = Course.find({ branch: req.body.branch, status: true }).countDocuments();
      const inactiveCourses = Course.find({
        branch: req.body.branch,
        status: false,
      }).countDocuments();
      const activeStudents = BranchStudent.find({
        branch: req.body.branch,
        status: true,
      }).countDocuments();
      const inactiveStudents = BranchStudent.find({
        branch: req.body.branch,
        status: false,
      }).countDocuments();
      const activeEmployees = BranchEmployee.find({
        branch: req.body.branch,
        status: true,
      }).countDocuments();
      const inactiveEmployees = BranchEmployee.find({
        branch: req.body.branch,
        status: false,
      }).countDocuments();
      const openLeads = Lead.find({ branch: req.body.branch, status: 'open' }).countDocuments();
      const lostLeads = Lead.find({ branch: req.body.branch, status: 'lost' }).countDocuments();
      const wonLeads = Lead.find({ branch: req.body.branch, status: 'won' }).countDocuments();
      const branchSMS = BranchSMS.findOne({ branch: req.body.branch });

      Promise.all([
        branchStorage,
        activeCourses,
        inactiveCourses,
        activeStudents,
        inactiveStudents,
        activeEmployees,
        inactiveEmployees,
        openLeads,
        lostLeads,
        wonLeads,
        branchSMS,
      ])
        .then((resData) => {
          const dashboardInfo = {
            branchStorage: resData[0],
            activeCourses: resData[1],
            inactiveCourses: resData[2],
            activeStudents: resData[3],
            inactiveStudents: resData[4],
            activeEmployees: resData[5],
            inactiveEmployees: resData[6],
            openLeads: resData[7],
            lostLeads: resData[8],
            wonLeads: resData[9],
            branchSMS: resData[10],
          };
          res.status(200).send(dashboardInfo);
        })
        .catch((e) => {
          errorHandler(e, 400, res);
        });
    } else if (req.body.role === 'teacher') {
      const date = getDate(new Date());
      const upToDate = getDate(getUpToDate(date));

      const upComingLectures = Schedule.aggregate([
        {
          $match: {
            branch: req.body.branch,
            tracher: req.user.imsMasterId,
            $and: [
              {
                $gte: ['$date', date],
              },
              {
                $lte: ['$date', upToDate],
              },
            ],
          },
        },

        {
          $addFields: {
            batchId: { $toObjectId: '$batch' },
            courseId: { $toObjectId: '$course' },
            branchId: { $toObjectId: '$branch' },
            categoryId: { $toObjectId: '$category' },
            subjectId: { $toObjectId: '$subject' },
          },
        },
        {
          $lookup: {
            from: 'branches',
            localField: 'branchId',
            foreignField: '_id',
            as: 'branches',
          },
        },
        {
          $lookup: {
            from: 'courses',
            localField: 'courseId',
            foreignField: '_id',
            as: 'courses',
          },
        },
        {
          $lookup: {
            from: 'courses',
            localField: 'courseId',
            foreignField: '_id',
            as: 'courses',
          },
        },
        {
          $lookup: {
            from: 'batches',
            localField: 'batchId',
            foreignField: '_id',
            as: 'batches',
          },
        },
        {
          $lookup: {
            from: 'employees',
            localField: 'teacher',
            foreignField: 'imsMasterId',
            as: 'teachers',
          },
        },
        {
          $addFields: {
            myBatch: { $arrayElemAt: ['$batches', 0] },
            myCourse: { $arrayElemAt: ['$courses', 0] },
            myBranch: { $arrayElemAt: ['$branches', 0] },
            myTeacher: { $arrayElemAt: ['$teachers', 0] },
          },
        },
        {
          $addFields: {
            categories: {
              $filter: {
                input: '$myBranch.categories',
                as: 'category',
                cond: {
                  $eq: ['$$category._id', '$categoryId'],
                },
              },
            },
            subjects: {
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
            myCategory: { $arrayElemAt: ['$categories', 0] },
            mySubject: { $arrayElemAt: ['$subjects', 0] },
          },
        },
        {
          $project: {
            batches: 0,
            courses: 0,
            branches: 0,
            categories: 0,
            subjects: 0,
            batchId: 0,
            courseId: 0,
            branchId: 0,
            categoryId: 0,
            studentId: 0,
          },
        },
        {
          $project: {
            _id: 1,
            teacher: 1,
            branch: 1,
            category: 1,
            course: 1,
            subject: 1,
            batch: 1,
            teacherName: '$myTeacher.name',
            subjectName: '$mySubject.subject',
            categoryName: '$myCategory.category',
            courseName: '$myCourse.basicDetails.courseName',
            batchName: '$myBatch.basicDetails.batchName',
            topic: 1,
            sessionType: 1,
            date: 1,
            startTime: 1,
            endTime: 1,
            status: 1,
          },
        },
      ]);

      res.status(201).send(upComingLectures);
    } else {
      const openLeads = Lead.find({ branch: req.body.branch, status: 'open' }).countDocuments();
      const lostLeads = Lead.find({ branch: req.body.branch, status: 'lost' }).countDocuments();
      const wonLeads = Lead.find({ branch: req.body.branch, status: 'won' }).countDocuments();

      Promise.all([openLeads, lostLeads, wonLeads])
        .then((resData) => {
          const dashboardInfo = {
            openLeads: resData[0],
            lostLeads: resData[1],
            wonLeads: resData[2],
          };
          res.status(200).send(dashboardInfo);
        })
        .catch((e) => {
          errorHandler(e, 400, res);
        });
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchDashboardForEmployee;
