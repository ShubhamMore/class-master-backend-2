const fs = require('fs');
const path = require('path');

const deleteFile = async (publicId) => {
  try {
    fs.unlink(path.join(__dirname, '../../', publicId), (err) => {
      try {
        if (err) {
          throw new Error(err);
        }
      } catch (e) {
        throw new Error(e);
      }
    });
    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteFile;
