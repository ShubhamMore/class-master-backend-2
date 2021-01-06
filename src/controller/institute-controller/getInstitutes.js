const Institute = require('../../models/institute.model');

const errorHandler = require('../../handler/error.handler');

const getInstitutes = async (req, res) => {
  try {
    const institutes = await Institute.find({ imsMasterId: new RegExp('.*INST.*') });

    res.status(200).send(institutes);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getInstitutes;
