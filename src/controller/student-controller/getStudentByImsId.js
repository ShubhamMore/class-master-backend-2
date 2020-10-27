const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const getStudentByImsId = async (req, res) => {
  try {
    const student = await Student.findOne({ imsMasterId: req.body.studentImsId });

    if (!student) {
      throw new Error('No student Found, Invalid IMS Id');
    }

    res.status(200).send(student);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentByImsId;
