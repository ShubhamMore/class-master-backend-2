const LectureContent = require('../../models/lecture-content.model');
const errorHandler = require('../../handler/error.handler');

const newLectureContents = async (req, res) => {
  try {
    const files = req.files;
    if (files !== undefined) {
      const lectureContents = new Array();
      for (let i = 0; i < files.length; i++) {
        let contentType;
        const fileType = files[i].filename.substring(files[i].filename.lastIndexOf('.') + 1);

        if (fileType === 'pdf') {
          contentType = 'PDF';
        } else if (fileType === 'mp4') {
          contentType = 'MP4';
        } else {
          contentType = 'IMAGE';
        }

        const content = {
          lecture: req.body.lecture,
          content_name: `${files[i].filename.substring(
            0,
            files[i].filename.lastIndexOf('-')
          )}.${fileType}`,
          contentType: contentType,
          secureUrl: process.env.API_URI + '/' + files[i].path,
          publicId: files[i].path,
          createdAt: Date.now(),
          status: true,
        };

        const lectureContent = new LectureContent(content);

        lectureContents.push(lectureContent);
      }

      await LectureContent.insertMany(lectureContents);

      res.status(200).send();
    } else {
      throw new Error('files Not Found');
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = newLectureContents;
