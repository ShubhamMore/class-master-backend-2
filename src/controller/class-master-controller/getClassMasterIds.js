const ClassMasterIds = require('../../models/class-master-ids.model');
const errorHandler = require('../../handler/error.handler');

const getClassMasterIds = async (req, res) => {
  try {
    const classMasterIds = await ClassMasterIds.findOne();

    res.status(200).send(classMasterIds);
  } catch (e) {
    errorHandler(err, 400, res);
  }
};

module.exports = getClassMasterIds;
