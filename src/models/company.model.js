const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({});

companySchema.methods.toJSON = function () {
  const company = this;
  const companyObject = company.toObject();

  delete companyObject.__v;

  return companyObject;
};

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
