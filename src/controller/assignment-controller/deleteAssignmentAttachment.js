const Assignment = require('../../models/assignment.model');
const BranchStorage = require('../../models/branch-storage.model');

const deleteFile = require('../../uploads/delete-file');

const errorHandler = require('../../handler/error.handler');

const deleteAssignmentAttachment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.body.id);

    if (!assignment) {
      throw new Error('Assignment Not Found');
    } else if (!assignment.fileName) {
      throw new Error('Assignment Attachment Not Found');
    }

    const branchStorage = await BranchStorage.findOne({ branch: assignment.branch });

    if (!branchStorage) {
      throw new Error('Branch Storage not Found');
    }

    let availableBranchStorage =
      branchStorage.totalStorageAssigned - branchStorage.totalStorageUsed;

    let usedBranchStorage = branchStorage.totalStorageUsed;
    let totalFileUploadSize = 0;

    let attachment = {
      storageType: assignment.storageType,
      fileName: assignment.fileName,
      fileSize: assignment.fileSize,
      fileType: assignment.fileType,
      secureUrl: assignment.secureUrl,
      publicId: assignment.publicId,
    };

    await deleteFile(assignment.publicId);

    usedBranchStorage -= assignment.fileSize;
    totalFileUploadSize -= assignment.fileSize;
    availableBranchStorage += assignment.fileSize;

    attachment.storageType = null;
    attachment.fileName = null;
    attachment.fileSize = null;
    attachment.fileType = null;
    attachment.secureUrl = null;
    attachment.publicId = null;

    await BranchStorage.findOneAndUpdate(
      { branch: assignment.branch },
      {
        $inc: {
          totalStorageUsed: totalFileUploadSize,
        },
      }
    );

    await Assignment.findByIdAndUpdate(req.body.id, attachment);

    res.status(200).send(assignment);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteAssignmentAttachment;
