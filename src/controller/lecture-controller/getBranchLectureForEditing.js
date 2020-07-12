const Lecture = require('../../models/lecture.model');
const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const getBranchLectureForEditing = async (req, res) => {
  try {
    const branch = await Branch.findById({ _id: req.body.branch });
    if (branches.length < 1) {
      throw new Error('No Branch Found');
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

module.exports = getBranchLectureForEditing;
