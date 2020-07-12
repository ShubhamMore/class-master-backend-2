const Exam = require('../../models/exam.model');
const OnlineExamResult = require('../../models/online-exam-result.model');
const errorHandler = require('../../handler/error.handler');

const saveOnlineExamResult = async (req, res) => {
  try {
    const marks = {
      student: req.body.student,
      marks: req.body.marks,
    };

    const exam = await Exam.findOneAndUpdate(
      { onlineExam: req.body.onlineExam },
      { $push: { marks } }
    );

    if (!exam) {
      throw new Error('Exam Not Found');
    }

    const onlineExamResult = new OnlineExamResult(req.body);
    await onlineExamResult.save();

    const data = {
      success: true,
    };

    res.status(201).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveOnlineExamResult;
