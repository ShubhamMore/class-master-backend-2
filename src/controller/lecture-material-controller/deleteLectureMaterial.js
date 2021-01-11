const LectureMaterial = require('../../models/lecture-material.model');
const BranchStorage = require('../../models/branch-storage.model');
const deleteFile = require('../../uploads/delete-file');

const errorHandler = require('../../handler/error.handler');

const deleteLectureMaterial = async (req, res) => {
  try {
    const lectureMaterial = await LectureMaterial.findById(req.body.id);

    if (!lectureMaterial) {
      throw new Error('No Lecture Material Found');
    }
    const publicId = lectureMaterial.publicId;

    await deleteFile(publicId);

    const branchStorageSizeToFree = lectureMaterial.fileSize * -1;

    await BranchStorage.findOneAndUpdate(
      { branch: lectureMaterial.branch },
      {
        $inc: {
          totalStorageUsed: branchStorageSizeToFree,
        },
      }
    );

    await LectureMaterial.findByIdAndDelete(req.body.id);

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteLectureMaterial;
