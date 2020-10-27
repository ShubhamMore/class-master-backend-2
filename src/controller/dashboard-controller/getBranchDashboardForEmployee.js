const BranchStorage = require('../../models/branch-storage.model');
const Course = require('../../models/course.model');
const BranchEmployee = require('../../models/branch-employee.model');
const BranchStudent = require('../../models/branch-student.model');
const Lead = require('../../models/lead.model');

const errorHandler = require('../../handler/error.handler');

const getBranchDashboardForEmployee = async (req, res) => {
  try {
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
        };
        res.status(200).send(dashboardInfo);
      })
      .catch((e) => {
        console.log(e);
        errorHandler(e, 400, res);
      });
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchDashboardForEmployee;
