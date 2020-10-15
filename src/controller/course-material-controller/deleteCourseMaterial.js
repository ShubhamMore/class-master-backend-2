const CourseMaterial = require('../../models/course-material.model');
const BranchStorage = require('../../models/branch-storage.model');
const deleteFile = require('../../uploads/delete-file');

const errorHandler = require('../../handler/error.handler');

const deleteCourseMaterial = async (req, res) => {
  try {
    const courseMaterial = await CourseMaterial.findById(req.body.id);

    if (!courseMaterial) {
      throw new Error('No Course Material Found');
    }
    const publicId = courseMaterial.publicId;

    await deleteFile(publicId);

    const branchStorageSizeToFree = courseMaterial.fileSize * -1;

    await BranchStorage.findOneAndUpdate(
      { branch: courseMaterial.branch },
      {
        $inc: {
          totalStorageUsed: branchStorageSizeToFree,
        },
      }
    );

    await CourseMaterial.findByIdAndDelete(req.body.id);

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteCourseMaterial;
