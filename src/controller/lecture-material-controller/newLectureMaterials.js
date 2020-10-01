const LectureMaterial = require('../../models/lecture-material.model');
const errorHandler = require('../../handler/error.handler');

const newLectureMaterials = async (req, res) => {
  try {
    const files = req.files;
    if (files !== undefined && files.length > 0) {
      const lectureMaterials = new Array();
      for (let i = 0; i < files.length; i++) {
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
          batch: req.body.batch,
          lecture: req.body.lecture,
          title: title,
          fileName: fileName,
          fileType: fileType,
          secureUrl: process.env.API_URI + '\\' + files[i].path,
          publicId: files[i].path,
          createdAt: Date.now().toLocaleString(),
          status: true,
        };

        const lectureMaterial = new LectureMaterial(materialData);

        lectureMaterials.push(lectureMaterial);
      }

      await LectureMaterial.insertMany(lectureMaterials);

      res.status(200).send({ success: true });
    } else {
      throw new Error('files Not Found');
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newLectureMaterials;
