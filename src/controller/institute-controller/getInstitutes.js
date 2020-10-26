const Institute = require('../../models/institute.model');

const errorHandler = require('../../handler/error.handler');

const getInstitutes = async (req, res) => {
  try {
    const institutes = Institute.find({ insMasterId: new RegExp('.*INST.*') });

    res.status(200).send(institutes);

    res.send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getInstitutes;
