const path = require('path');
const fs = require('fs');

const cloudinary = require('./cloudinaryConfig');

const deleteFile = require('../delete-file');

const uploadFilesToCloudinary = async (filePaths, fileNames, cloudDirectory, resourceType) => {
  try {
    let upload_len = filePaths.length;
    let uploadRes = new Array();
    let uploadErr = new Array();
    let fileErr = new Array();

    for (let i = 0; i < upload_len; i++) {
      let filePath = filePaths[i];
      let fileName = fileNames[i];
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
                fileErr.push(err);
              }
            });
            uploadErr.push(error);
          }

          await deleteFile(filePath);

          uploadRes.push(responce);
        }
      );
    }

    return { uploadRes, uploadErr, fileErr };
  } catch (e) {
    const err = 'Something bad happen while uploading File files, ' + e;
    throw new Error(err.replace('Error: ', ''));
  }
};

module.exports = uploadFilesToCloudinary;
