const fs = require('fs');
const path = require('path');

const deleteFile = async (publicId) => {
  try {
    fs.unlink(path.join(__dirname, '../../', publicId), (err) => {
      if (err) {
        throw new Error(err);
      }
    });
    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteFile;
