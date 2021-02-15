const path = require('path');
const fs = require('fs');

const cloudinary = require('./cloudinaryConfig');

const deleteFile = require('../delete-file');


const uploadFileToCloudinary = async (filePath, fileName, cloudDirectory, resourceType) => {
  try {
    let uploadRes;
    let uploadErr;
    let fileErr;

    await cloudinary.v2.uploader.upload(
      filePath,
      {
        resource_type: resourceType,
        folder: cloudDirectory,
        public_id: fileName,
      },
      (error, responce) => {
        if (error) {
          fs.unlink(path.join(__dirname, '../../', filePath), (err) => {
            if (err) {
              fileErr = err;
            }
          });
          uploadErr = error;
        }

        await deleteFile(filePath);

        uploadRes = responce;
      }
    );
    return { uploadRes, uploadErr, fileErr };
  } catch (e) {
    const err = 'Something bad happen while uploading File file, ' + e;
    throw new Error(err.replace('Error: ', ''));
  }
};

module.exports = uploadFileToCloudinary;
