const Branch = require('../../models/branch.model');
const User = require('../../models/user.model');
const sendMail = require('../../email/mail');
const errorHandler = require('../../handler/error.handler');

const newBranch = async (req, res) => {
  try {
    const newUser = {
      name: req.body.branchName.toLowerCase(),
      email: req.body.email,
      password: req.body.password,
      userType: 'branch',
    };
    const user = new User(newUser);
    await user.save();

    const branch = new Branch(req.body);
    await branch.save();

    const mail = {
      to: branch.email,
      from: process.env.EMAIL,
      subject: `Your login details for ${process.env.SITE_NAME}`,
      text: '',
      html: `
                    <h2>Welcome to ${process.env.TITLE}, we created new Branch <em>${branch.branchName}</em></h2><br>
                    <p>Your Branch Login Credentials are : </p><br>
                    <strong>Username : </strong> ${branch.email}
                    <strong>password : </strong> ${branch.phone}<br>
                    <p>Click the following link for login..</p>
                    <a href="${process.env.LOGIN_URL}">${process.env.SITE_URL}</a>
                `,
    };

    await sendMail(mail);

    const data = {
      success: true,
    };
    res.status(201).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newBranch;
