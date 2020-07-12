const Student = require('../../models/student.model');
const User = require('../../models/user.model');
const sendMail = require('../../email/mail');
const errorHandler = require('../../handler/error.handler');

const changeStudentStatus = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { _id: req.body._id },
      {
        status: req.body.status,
      }
    );

    if (!student) {
      throw new Error('No Student Found');
    }

    if (req.body.status === '0') {
      const user = await User.findOneAndRemove({
        email: student.email,
        userType: 'student',
      });
      if (!user) {
        throw new Error('Deactivation Failed, User Not Found');
      }
    } else if (req.body.status === '1') {
      const newUser = {
        name: student.name.toLowerCase(),
        email: student.email,
        password: req.body.password,
        userType: 'student',
      };
      const user = new User(newUser);
      await user.save();
    }

    const mail = {
      to: student.email,
      from: process.env.EMAIL,
      subject:
        req.body.status === '0'
          ? `Your ${process.env.TITLE} account is Deactivated`
          : `Your ${process.env.TITLE} account is Activated`,
      text: '',
      html:
        req.body.status === '0'
          ? `<h2>Thank You for using ${process.env.TITLE} <em>${student.name}</em></h2><br>
              <p>Your Login Credentials are deactivated by admin </p>`
          : `
                    <h2>Welcome again to ${process.env.TITLE} <em>${student.name}</em></h2><br>
                    <p>Your Login Credentials are : </p><br>
                    <strong>Username : </strong> ${student.email}
                    <strong>password : </strong> ${student.phone}<br>
                    <p>Click the following link for login..</p>
                    <a href="${process.env.LOGIN_URL}">${process.env.SITE_URL}</a>
                `,
    };

    await sendMail(mail);

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeStudentStatus;
