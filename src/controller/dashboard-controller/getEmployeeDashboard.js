const Course = require('../../models/course.model');
const BranchEmployee = require('../../models/branch-employee.model');
const BranchStudent = require('../../models/branch-student.model');
const Lead = require('../../models/lead.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const getEmployeeDashboard = async (req, res) => {
  try {
    const activeCourses = Course.find({ branch: req.body.branch, status: true }).countDocuments();
    const inactiveCourses = Course.find({ branch: req.body.branch, status: true }).countDocuments();
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
          activeCourses: resData[0],
          inactiveCourses: resData[1],
          activeStudents: resData[2],
          inactiveStudents: resData[3],
          activeEmployees: resData[4],
          inactiveEmployees: resData[5],
          openLeads: resData[6],
          lostLeads: resData[7],
          wonLeads: resData[8],
        };
        res.status(200).send(dashboardInfo);
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getEmployeeDashboard;
