const BranchStorage = require('../../models/branch-storage.model');
const AssignmentSubmission = require('../../models/assignment-submission.model');

const deleteFile = require('../../uploads/delete-file');

const errorHandler = require('../../handler/error.handler');

const updateAssignmentSubmissions = async (req, res) => {
  try {
    const file = req.file;

    console.log(req.body);

    const assignmentSubmission = await AssignmentSubmission.findById(req.body._id);

    if (!assignmentSubmission) {
      if (file) {
        await deleteFile(file.path);
      }

      throw new Error('Submission Not Found');
    }

    const branchStorage = await BranchStorage.findOne({ branch: req.body.branch });

    if (!branchStorage) {
      if (file) {
        await deleteFile(file.path);
      }
      throw new Error('Branch Storage not Found');
    }

    let availableBranchStorage =
      branchStorage.totalStorageAssigned - branchStorage.totalStorageUsed;

    if (availableBranchStorage <= 0) {
      throw new Error('Storage is Full, File Uploading Failed');
    }

    let usedBranchStorage = branchStorage.totalStorageUsed;
    let totalFileUploadSize = 0;

    let submissionFile = {
      fileName: assignmentSubmission.fileName,
      fileSize: assignmentSubmission.fileSize,
      fileType: assignmentSubmission.fileType,
      secureUrl: assignmentSubmission.secureUrl,
      publicId: assignmentSubmission.publicId,
    };

    if (file && file !== undefined) {
      if (submissionFile.fileSize) {
        usedBranchStorage -= submissionFile.fileSize;
        totalFileUploadSize -= submissionFile.fileSize;
        availableBranchStorage += submissionFile.fileSize;
      }

      const fileSize = file.size;

      if (fileSize > availableBranchStorage) {
        await deleteFile(file.path);
        throw new Error('Branch Storage is full');
      }

      if (submissionFile.publicId) {
        await deleteFile(submissionFile.publicId);
      }

      usedBranchStorage += fileSize;
      totalFileUploadSize += fileSize;
      availableBranchStorage -= fileSize;

      let fileType;
      const curFileType = file.filename.substring(file.filename.lastIndexOf('.') + 1);

      if (curFileType === 'pdf') {
        fileType = 'PDF';
      } else if (curFileType === 'mp4') {
        fileType = 'MP4';
      } else {
        fileType = 'IMAGE';
      }

      const fileName = `${file.filename.substring(
        0,
        file.filename.lastIndexOf('-')
      )}.${curFileType}`;

      submissionFile.fileName = fileName;
      submissionFile.fileSize = fileSize;
      submissionFile.fileType = fileType;
      submissionFile.secureUrl = process.env.API_URI + '\\' + file.path;
      submissionFile.publicId = file.path;

      await BranchStorage.findOneAndUpdate(
        { branch: req.body.branch },
        {
          $inc: {
            totalStorageUsed: totalFileUploadSize,
          },
        }
      );
    }

    const newAssignmentSubmission = {
      ...req.body,
      ...submissionFile,
    };

    await AssignmentSubmission.findByIdAndUpdate(req.body._id, newAssignmentSubmission);

    res.status(200).send(newAssignmentSubmission);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = updateAssignmentSubmissions;
