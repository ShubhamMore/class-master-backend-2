const BranchStorage = require('../../models/branch-storage.model');
const CourseMaterial = require('../../models/course-material.model');

const deleteFile = require('../../uploads/delete-file');
const sortArrayOfObjects = require('../../functions/sortArrayOfObjects');

const errorHandler = require('../../handler/error.handler');

const newCourseMaterials = async (req, res) => {
  try {
    const files = sortArrayOfObjects(req.files, 'size');

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

    const overStorageFiles = new Array();

    if (files !== undefined && files.length > 0) {
      const courseMaterials = new Array();
      for (let i = 0; i < files.length; i++) {
        const fileSize = files[i].size;
        if (fileSize > availableBranchStorage) {
          overStorageFiles.push(files[i].path);
          continue;
        }

        usedBranchStorage += fileSize;
        totalFileUploadSize += fileSize;
        availableBranchStorage -= fileSize;

        let fileType;
        const curFileType = files[i].filename.substring(files[i].filename.lastIndexOf('.') + 1);
        if (curFileType === 'pdf') {
          fileType = 'PDF';
        } else if (curFileType === 'mp4') {
          fileType = 'MP4';
        } else {
          fileType = 'IMAGE';
        }

        const title = `${files[i].filename.substring(0, files[i].filename.lastIndexOf('-'))}`
          .split('-')
          .join(' ')
          .toUpperCase();

        const fileName = `${files[i].filename.substring(
          0,
          files[i].filename.lastIndexOf('-')
        )}.${fileType}`;

        const materialData = {
          branch: req.body.branch,
          category: req.body.category,
          course: req.body.course,
          subject: req.body.subject,
          title: title,
          fileName: fileName,
          fileSize: fileSize,
          fileType: fileType,
          secureUrl: process.env.API_URI + '\\' + files[i].path,
          publicId: files[i].path,
          createdAt: Date.now().toLocaleString(),
          status: true,
        };

        const courseMaterial = new CourseMaterial(materialData);
        courseMaterials.push(courseMaterial);
      }

      overStorageFiles.forEach(async (publicId) => {
        await deleteFile(publicId);
      });

      await BranchStorage.findOneAndUpdate(
        { branch: req.body.branch },
        {
          $inc: {
            totalStorageUsed: totalFileUploadSize,
          },
        }
      );

      await CourseMaterial.insertMany(courseMaterials);

      res.status(200).send({ success: true, overStorageFiles: overStorageFiles.length });
    } else {
      throw new Error('files Not Found');
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newCourseMaterials;
