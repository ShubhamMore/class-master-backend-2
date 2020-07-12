const Salary = require('../../models/salary.model');
const errorHandler = require('../../handler/error.handler');

const changeSalaryStatus = async (req, res) => {
  try {
    const salary = await Salary.findByIdAndUpdate(req.body._id, {
      status: req.body.status,
    });

    if (!salary) {
      throw new Error('Salary Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeSalaryStatus;
