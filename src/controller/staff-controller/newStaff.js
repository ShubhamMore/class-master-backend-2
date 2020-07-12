const Staff = require('../../models/staff.model');
const User = require('../../models/user.model');
const errorHandler = require('../../handler/error.handler');

const sendMail = require('../../email/mail');

const newStaff = async (req, res) => {
  try {
    if (req.body.status === '1') {
      const newUser = {
        name: req.body.name.toLowerCase(),
        email: req.body.email,
        password: req.body.password,
        userType: 'staff',
      };
      const user = new User(newUser);
      await user.save();
    }

    const staff = new Staff(req.body);
    await staff.save();

    if (staff.status === '1') {
      const mail = {
        to: staff.email,
        from: process.env.EMAIL,
        subject: `Your login details for ${process.env.SITE_NAME}`,
        text: '',
        html: `
                      <h2>Welcome to ${process.env.TITLE} <em>${staff.name}</em></h2><br>
                      <p>Your Login Credentials are : </p><br>
                      <strong>Username : </strong> ${staff.email}
                      <strong>password : </strong> ${staff.phone}<br>
                      <p>Click the following link for login..</p>
                      <a href="${process.env.LOGIN_URL}">${process.env.SITE_URL}</a>
    
                  `,
      };

      await sendMail(mail);
    }
    res.status(201).send({ _id: staff._id });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newStaff;
