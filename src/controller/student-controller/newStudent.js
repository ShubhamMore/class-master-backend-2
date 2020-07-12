const Student = require('../../models/student.model');
const Course = require('../../models/course.model');
const History = require('../../models/history.model');
const User = require('../../models/user.model');
const sendMail = require('../../email/mail');
const errorHandler = require('../../handler/error.handler');

const newStudent = async (req, res) => {
  try {
    if (req.body.status === '1') {
      const newUser = {
        name: req.body.name.toLowerCase(),
        email: req.body.email,
        password: req.body.password,
        userType: 'student',
      };
      const user = new User(newUser);
      await user.save();
    }

    const newStudent = {
      name: req.body.name.toLowerCase(),
      birthDate: req.body.birthDate,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      parentName: req.body.parentName,
      parentEmail: req.body.parentEmail,
      parentPhone: req.body.parentPhone,
      branch: req.body.branch,
      courseType: req.body.courseType,
      course: req.body.course,
      batch: req.body.batch,
      paidAmount: '0',
      paymentType: '0',
      status: req.body.status,
    };

    const course = await Course.findById(newStudent.course);
    newStudent.amountDue = course.totalFees;

    const student = new Student(newStudent);
    await student.save();

    if (student.status === '1') {
      const mail = {
        to: student.email,
        from: process.env.EMAIL,
        subject: `Your login details for ${process.env.SITE_NAME}`,
        text: '',
        html: `
                      <h2>Welcome to ${process.env.TITLE} <em>${student.name}</em></h2><br>
                      <p>Your Login Credentials are : </p><br>
                      <strong>Username : </strong> ${student.email}
                      <strong>password : </strong> ${student.phone}<br>
                      <p>Click the following link for login..</p>
                      <a href="${process.env.LOGIN_URL}">${process.env.SITE_URL}</a>
    
                  `,
      };

      await sendMail(mail);
    }

    const newHistory = {
      student: student._id,
      branches: [
        {
          branch: student.branch,
          courseTypes: [
            {
              courseType: student.courseType,
              courses: [
                {
                  course: student.course,
                  batches: [
                    {
                      batch: student.batch,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
    const history = new History(newHistory);
    await history.save();
    const data = {
      success: true,
    };
    res.status(201).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newStudent;
