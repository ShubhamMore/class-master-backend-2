const BranchEmployee = require('../../models/branch-employee.model');
const Course = require('../../models/course.model');
const errorHandler = require('../../handler/error.handler');

const getCourses = async (req, res) => {
  try {
    let employeeUser = null;
    if (req.user.userRole === 'employee') {
      employeeUser = await BranchEmployee.findOne({
        branch: req.body.branch,
        employee: req.user.imsMasterId,
      });

      if (!employeeUser) {
        throw new Error('You are not authorized user to Access this Data');
      }
    }

    const query = {
      branch: req.body.branch,
    };

    if (employeeUser && (employeeUser.role === 'teacher' || employeeUser.role === 'councillor')) {
      query.status = true;
    }

    const category = req.body.category;

    if (category !== '') {
      query['basicDetails.category'] = category;
    }

    const courses = await Course.find(query);
    res.status(200).send(courses);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCourses;
