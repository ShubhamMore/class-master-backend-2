const Staff = require('../../models/staff.model');
const User = require('../../models/user.model');
const errorHandler = require('../../handler/error.handler');

const sendMail = require('../../email/mail');

const changeStaffStatus = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.body._id, {
      status: req.body.status,
    });
    if (!staff) {
      throw new Error('No Staff Found, Status Updation Failed');
    }
    if (req.body.status === '0') {
      const user = await User.findOneAndRemove({
        email: staff.email,
        userType: 'staff',
      });
      if (!user) {
        throw new Error('Deactivation Failed, User Not Found');
      }
    } else if (req.body.status === '1') {
      const newUser = {
        name: staff.name.toLowerCase(),
        email: staff.email,
        password: req.body.password,
        userType: 'staff',
      };
      const user = new User(newUser);
      await user.save();
    }

    const mail = {
      to: staff.email,
      from: process.env.EMAIL,
      subject:
        req.body.status === '0'
          ? `Your ${process.env.TITLE} account is Deactivated`
          : `Your ${process.env.TITLE} account is Activated`,
      text: '',
      html:
        req.body.status === '0'
          ? `<h2>Thank You for using ${process.env.TITLE} <em>${staff.name}</em></h2><br>
              <p>Your Login Credentials are deactivated by admin </p>`
          : `
                    <h2>Welcome again to ${process.env.TITLE} <em>${staff.name}</em></h2><br>
                    <p>Your Login Credentials are : </p><br>
                    <strong>Username : </strong> ${staff.email}
                    <strong>password : </strong> ${staff.phone}<br>
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

module.exports = changeStaffStatus;
