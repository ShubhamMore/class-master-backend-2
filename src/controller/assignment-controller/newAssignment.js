const Assignment = require('../../models/assignment.model');
const BranchStorage = require('../../models/branch-storage.model');

const deleteFile = require('../../uploads/delete-file');

const errorHandler = require('../../handler/error.handler');

const saveAssignment = async (req, res) => {
  try {
    const file = req.file;

    req.body.generatedBy = req.user.imsMasterId;

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

    let attachment = {
      fileName: null,
      fileSize: null,
      fileType: null,
      secureUrl: null,
      publicId: null,
    };

    if (file && file !== undefined) {
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

      const fileName = `${file.filename.substring(
        0,
        file.filename.lastIndexOf('-')
      )}.${curFileType}`;

      attachment.fileName = fileName;
      attachment.fileSize = fileSize;
      attachment.fileType = fileType;
      attachment.secureUrl = process.env.API_URI + '\\' + file.path;
      attachment.publicId = file.path;

      await BranchStorage.findOneAndUpdate(
        { branch: req.body.branch },
        {
          $inc: {
            totalStorageUsed: totalFileUploadSize,
          },
        }
      );
    }

    const newAssignment = {
      ...req.body,
      ...attachment,
    };

    const assignment = new Assignment(newAssignment);
    await assignment.save();

    res.status(200).send(assignment);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveAssignment;
