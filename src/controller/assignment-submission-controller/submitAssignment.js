const BranchStorage = require('../../models/branch-storage.model');
const AssignmentSubmission = require('../../models/assignment-submission.model');

const deleteFile = require('../../uploads/delete-file');

const errorHandler = require('../../handler/error.handler');

const newAssignmentSubmission = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      throw new Error('Submission File is Required');
    }

    const branchStorage = await BranchStorage.findOne({ branch: req.body.branch });

    if (!branchStorage) {
      throw new Error('Branch Storage not Found');
    }

    let availableBranchStorage =
      branchStorage.totalStorageAssigned - branchStorage.totalStorageUsed;

    if (availableBranchStorage <= 0) {
      throw new Error('Storage is Full, File Uploading Failed');
    }

    let usedBranchStorage = branchStorage.totalStorageUsed;
    let totalFileUploadSize = 0;

    const fileSize = file.size;
    if (fileSize > availableBranchStorage) {
      await deleteFile(file.path);
      throw new Error('Branch Storage is full');
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

    const fileName = `${file.filename.substring(0, file.filename.lastIndexOf('-'))}.${curFileType}`;

    const title = `${file.filename.substring(0, file.filename.lastIndexOf('-'))}`
      .split('-')
      .join(' ')
      .toUpperCase();

    const submissionData = {
      assignment: req.body.assignment,
      student: req.user.imsMasterId,
      title: title,
      description: req.body.description,
      fileName: fileName,
      fileSize: fileSize,
      fileType: fileType,
      secureUrl: process.env.API_URI + '\\' + file.path,
      publicId: file.path,
      createdAt: Date.now().toLocaleString(),
      status: true,
    };

    await BranchStorage.findOneAndUpdate(
      { branch: req.body.branch },
      {
        $inc: {
          totalStorageUsed: totalFileUploadSize,
        },
      }
    );

    const assignmentSubmission = new AssignmentSubmission(submissionData);
    await assignmentSubmission.save();

    res.status(200).send(assignmentSubmission);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = newAssignmentSubmission;