const ImsMasterIds = require('../../models/ims-master-id.model');
const errorHandler = require('../../handler/error.handler');

const getImsMasterIds = async (req, res) => {
  try {
    const imsMasterIds = await ImsMasterIds.findOne();

    res.status(200).send(imsMasterIds);
  } catch (e) {
    errorHandler(err, 400, res);
  }
};

module.exports = getImsMasterIds;
