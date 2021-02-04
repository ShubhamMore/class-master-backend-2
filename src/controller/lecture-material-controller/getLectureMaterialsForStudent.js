const LectureMaterial = require('../../models/lecture-material.model');
const BranchStorage = require('../../models/branch-storage.model');

const errorHandler = require('../../handler/error.handler');

const getLectureMaterialsForStudent = async (req, res) => {
  try {
    const branchStorage = await BranchStorage.findOne({ branch: req.body.branch });

    const storageType = new Array();
    storageType.push(null);
    storageType.push('');
    storageType.push('regular');

    if (branchStorage.storagePackage) {
      storageType.push('extra');
    }

    const lectureMaterials = await LectureMaterial.find({
      lecture: req.body.lecture,
      storageType: { $in: storageType },
      status: true,
    });

    res.status(200).send(lectureMaterials);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureMaterialsForStudent;
