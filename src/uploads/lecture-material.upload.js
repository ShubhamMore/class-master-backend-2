const multer = require('multer');

const MIME_TYPE_MAP = {
  // PDF
  'application/pdf': 'pdf',
  // IMAGES
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  // VIDEO
  'video/mp4': 'mp4',
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
      error = null;
    }
    cb(error, 'lecture-materials');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  },
});

module.exports = storage;
