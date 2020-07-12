const Lecture = require('../../models/lecture.model');
const Staff = require('../../models/staff.model');
const errorHandler = require('../../handler/error.handler');
const getStaffLectureForEditing = async (req, res) => {
  try {
    const staff = await Staff.findById(req.body.staff);
    if (!staff) {
      throw new Error('No Staff Found');
    }

    const lecture = await Lecture.findById(req.body._id);
    if (!lecture) {
      throw new Error('No lecture Found');
    }

    res.status(200).send(lecture);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStaffLectureForEditing;
