const User = require('../../models/user.model');

const errorHandler = require('../../handler/error.handler');

const activateUser = async (req, res) => {
  try {
    const instituteUsers = User.find(
      { userRole: 'institute' },
      { _id: 0, name: 1, email: 1, phone: 1, insMasterId: 1, status: 1 }
    );

    const employeeUsers = User.find(
      { userRole: 'employee' },
      { _id: 0, name: 1, email: 1, phone: 1, insMasterId: 1, status: 1 }
    );

    const studentUsers = User.find(
      { userRole: 'student' },
      { _id: 0, name: 1, email: 1, phone: 1, insMasterId: 1, status: 1 }
    );

    Promise.all([instituteUsers, employeeUsers, studentUsers])
      .then((resData) => {
        const data = {
          instituteUsers: resData[0],
          employeeUsers: resData[1],
          studentUsers: resData[2],
        };

        res.status(200).send(data);
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });

    res.send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = activateUser;
