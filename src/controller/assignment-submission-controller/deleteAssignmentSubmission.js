const AssignmentSubmission = require('../../models/assignment-submission.model');
const BranchStorage = require('../../models/branch-storage.model');
const deleteFile = require('../../uploads/delete-file');

const errorHandler = require('../../handler/error.handler');

const deleteAssignmentSubmission = async (req, res) => {
  try {
    const assignmentSubmission = await AssignmentSubmission.findById(req.body.id);

    if (!assignmentSubmission) {
      throw new Error('No Assignment Submission Found');
    }
    const publicId = assignmentSubmission.publicId;

    await deleteFile(publicId);

    const branchStorageSizeToFree = assignmentSubmission.fileSize * -1;

    await BranchStorage.findOneAndUpdate(
      { branch: assignmentSubmission.branch },
      {
        $inc: {
          totalStorageUsed: branchStorageSizeToFree,
        },
      }
    );

    await AssignmentSubmission.findByIdAndDelete(req.body.id);

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteAssignmentSubmission;
