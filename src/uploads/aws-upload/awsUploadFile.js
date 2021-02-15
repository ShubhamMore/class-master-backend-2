const path = require('path');
const fs = require('fs').promises;
const s3 = require('./awsConfig');

const deleteFile = require('../delete-file');

const uploadFileToAWS = async (filePath, fileName, cloudDirectory) => {
  try {
    let uploadRes;
    let uploadErr;
    let fileErr;

    const fileContent = await fs.readFile(filePath);

    // Setting up S3 upload parameters
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME + '/' + cloudDirectory,
      Key: fileName, // File name you want to save as in S3
      Body: fileContent,
      ACL: 'public-read',
    };

    // Uploading files to the bucket
    const res = await s3.upload(params).promise();

    if (res.Location) {
      uploadRes = res;
    } else {
      uploadErr = res;
    }

    await deleteFile(filePath);

    return { uploadRes, uploadErr, fileErr };
  } catch (e) {
    const err = 'Something bad happen while uploading file, ' + e;
    throw new Error(err.replace('Error: ', ''));
  }
};

module.exports = uploadFileToAWS;
