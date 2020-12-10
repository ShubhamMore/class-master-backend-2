const Employee = require('../../models/employee.model');
const BranchEmployee = require('../../models/branch-employee.model');
const User = require('../../models/user.model');
const sendMail = require('../../email/mail');
const getImsMasterId = require('../../functions/getImsMasterId');
const getNewUserMailTemplate = require('../../html-template/newUserTemplate');
const errorHandler = require('../../handler/error.handler');

const newEmployee = async (req, res) => {
  try {
    const employee = req.body.employee;

    if (!employee) {
      throw new Error('Employee Details Are not Provided');
    }

    const branchEmployee = req.body.branchEmployee;
    if (!branchEmployee) {
      throw new Error('Employee Branch Details Are not Provided');
    }
    const userRole = 'employee';

    employee.imsMasterId = await getImsMasterId(userRole);

    const user = new User({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      userRole,
      imsMasterId: employee.imsMasterId,
      password: employee.password,
    });

    await user.save();

    delete employee.password;

    await new Employee(employee).save();

    branchEmployee.employee = employee.imsMasterId;

    await new BranchEmployee(branchEmployee).save();

    const mail = {
      to: user.email,
      from: process.env.EMAIL,
      subject: 'New Employee Registered at Class Master',
      html: await getNewUserMailTemplate(user),
    };

    await sendMail(mail);

    res.status(201).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newEmployee;
