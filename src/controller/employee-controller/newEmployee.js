const Employee = require('../../models/employee.model');
const User = require('../../models/user.model');
const getImsMasterId = require('../../functions/getImsMasterId');
const errorHandler = require('../../handler/error.handler');

const newEmployee = async (req, res) => {
  try {
    req.body.imsMasterId = await getImsMasterId(req.body.userRole);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      imsMasterId: req.body.imsMasterId,
      password: req.body.password,
    });

    await user.save();

    delete req.body.password;

    await new Employee(req.body).save();

    res.status(201).send({ _id: user._id });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newEmployee;
