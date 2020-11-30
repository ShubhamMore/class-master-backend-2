const Student = require('../../models/student.model');
const BranchStudent = require('../../models/branch-student.model');
const User = require('../../models/user.model');

const sendMail = require('../../email/mail');
const getImsMasterId = require('../../functions/getImsMasterId');
const getNewUserMailTemplate = require('../../html-template/newUserTemplate');
const errorHandler = require('../../handler/error.handler');

const newStudent = async (req, res) => {
  try {
    const student = req.body.student;

    if (!student) {
      throw new Error('Student Details Are not Provided');
    }

    const branchStudent = req.body.branchStudent;
    if (!branchStudent) {
      throw new Error('Student Branch Details Are not Provided');
    }
    const userRole = 'student';

    student.imsMasterId = await getImsMasterId(userRole);

    const user = new User({
      name: student.name,
      email: student.email,
      phone: student.phone,
      userRole,
      imsMasterId: student.imsMasterId,
      password: student.password,
    });

    await user.save();

    delete student.password;

    await new Student(student).save();

    branchStudent.student = student.imsMasterId;

    await new BranchStudent(branchStudent).save();

    const mail = {
      to: user.email,
      from: process.env.EMAIL,
      subject: 'New Student Registered at Class Master',
      html: await getNewUserMailTemplate(user),
    };

    await sendMail(mail);

    res.status(201).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newStudent;
