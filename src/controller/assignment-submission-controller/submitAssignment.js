const BranchStorage = require('../../models/branch-storage.model');
const AssignmentSubmission = require('../../models/assignment-submission.model');

const deleteFile = require('../../uploads/delete-file');

const awsUploadFile = require('../../uploads/aws-upload/awsUploadFile');

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

    const filePath = file.path;
    let fileName = file.filename;

    const cloudDirectory = req.user.imsMasterId + '/' + req.body.branch + '/assignment-submissions';
    const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

    const uploadRes = uploadResponce.uploadRes;

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

    fileName = `${file.filename.substring(0, file.filename.lastIndexOf('-'))}.${curFileType}`;

    const title = `${file.filename.substring(0, file.filename.lastIndexOf('-'))}`
      .split('-')
      .join(' ')
      .toUpperCase();

    const regularStorage = +branchStorage.regularStorageAssigned;
    const storageType = usedBranchStorage > regularStorage ? 'extra' : 'regular';

    const submissionData = {
      branch: req.body.branch,
      assignment: req.body.assignment,
      student: req.user.imsMasterId,
      title: title,
      description: req.body.description,
      storageType: storageType,
      fileName: fileName,
      fileSize: fileSize,
      fileType: fileType,
      secureUrl: uploadRes.Location,
      publicId: uploadRes.key,
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
    errorHandler(e, 400, res);
  }
};

module.exports = newAssignmentSubmission;
