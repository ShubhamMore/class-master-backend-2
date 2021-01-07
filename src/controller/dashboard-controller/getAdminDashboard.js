const Institute = require('../../models/institute.model');
const Student = require('../../models/student.model');
const Employee = require('../../models/employee.model');

const errorHandler = require('../../handler/error.handler');

const getAdminDashboard = async (req, res) => {
  try {
    const activeInstitutes = Institute.find({
      status: true,
    }).countDocuments();
    const inactiveInstitutes = Institute.find({
      status: false,
    }).countDocuments();

    const activeStudents = Student.find({
      status: true,
    }).countDocuments();
    const inactiveStudents = Student.find({
      status: false,
    }).countDocuments();

    const activeEmployees = Employee.find({
      status: true,
    }).countDocuments();
    const inactiveEmployees = Employee.find({
      status: false,
    }).countDocuments();

    Promise.all([
      activeInstitutes,
      inactiveInstitutes,
      activeStudents,
      inactiveStudents,
      activeEmployees,
      inactiveEmployees,
    ])
      .then((resData) => {
        const dashboardInfo = {
          activeInstitutes: resData[0],
          inactiveInstitutes: resData[1],
          activeStudents: resData[2],
          inactiveStudents: resData[3],
          activeEmployees: resData[4],
          inactiveEmployees: resData[5],
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

module.exports = getAdminDashboard;
