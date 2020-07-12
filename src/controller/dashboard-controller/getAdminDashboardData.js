const Branch = require('../../models/branch.model');
const Course = require('../../models/course.model');
const Student = require('../../models/student.model');
const Staff = require('../../models/staff.model');
const Lead = require('../../models/lead.model');
const errorHandler = require('../../handler/error.handler');

const getAdminDashboardData = async (req, res) => {
  try {
    const branches = Branch.find({}, { _id: 1, branchName: 1, status: 1 });
    const courses = Course.find().countDocuments();
    const students = Student.find().countDocuments();
    const staffs = Staff.find().countDocuments();
    const leads = Lead.find({ status: '0' }).countDocuments();

    Promise.all([branches, courses, students, staffs, leads]).then((data) => {
      const dashboard = {
        branches: data[0],
        courses: data[1],
        students: data[2],
        staffs: data[3],
        leads: data[4],
      };

      res.status(200).send(dashboard);
    });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAdminDashboardData;
