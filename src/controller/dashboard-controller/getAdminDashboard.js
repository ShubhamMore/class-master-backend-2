const Institute = require('../../models/institute.model');
const Student = require('../../models/student.model');
const Employee = require('../../models/employee.model');

const errorHandler = require('../../handler/error.handler');

const getAdminDashboard = async (req, res) => {
  try {
    const institutes = Institute.find({}).countDocuments();

    const students = Student.find({}).countDocuments();

    const employees = Employee.find({}).countDocuments();

    Promise.all([institutes, students, employees])
      .then((resData) => {
        const dashboardInfo = {
          institutes: resData[0],
          students: resData[1],
          employees: resData[2],
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
