const CourseMaterial = require('../../models/course-material.model');
const errorHandler = require('../../handler/error.handler');

const newCourseMaterials = async (req, res) => {
  try {
    const files = req.files;
    if (files !== undefined && files.length > 0) {
      const courseMaterials = new Array();
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
          subject: req.body.subject,
          title: title,
          fileName: fileName,
          fileType: fileType,
          secureUrl: process.env.API_URI + '\\' + files[i].path,
          publicId: files[i].path,
          createdAst: Date.now().toLocaleString(),
          status: true,
        };

        const courseMaterial = new CourseMaterial(materialData);

        courseMaterials.push(courseMaterial);
      }

      await CourseMaterial.insertMany(courseMaterials);

      res.status(200).send({ success: true });
    } else {
      throw new Error('files Not Found');
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = newCourseMaterials;
