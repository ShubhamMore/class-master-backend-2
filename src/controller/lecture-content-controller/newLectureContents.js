const LectureContent = require('../../models/lecture-content.model');
const errorHandler = require('../../handler/error.handler');

const newLectureContents = async (req, res) => {
  try {
    const files = req.files;
    if (files !== undefined) {
      const responce = new Array();
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

        const content_data = {
          lecture: req.body.lecture,
          content_name: `${files[i].filename.substring(
            0,
            files[i].filename.lastIndexOf('-')
          )}.${fileType}`,
          contentType: contentType,
          secure_url: process.env.API_URI + '/' + files[i].path,
          public_id: files[i].path,
          created_at: Date.now(),
          status: '1',
        };

        const lectureContent = new LectureContent(content_data);

        await lectureContent.save();

        responce.push(lectureContent);
      }

      res.status(200).send({ responce });
    } else {
      throw new Error('files Not Found');
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newLectureContents;
