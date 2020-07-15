const ImsMasterId = require('../../models/ims-master-id.model');
const errorHandler = require('../../handler/error.handler');

const updateImsMasterIds = async (req, res) => {
  try {
    let imsMasterIds = await ImsMasterId.findByIdAndUpdate(req.body._id, req.body);

    if (!imsMasterIds) {
      const imsMasterIds = new imsMasterIds(req.body);
      await imsMasterIds.save();
    }

    res.status(201).send(imsMasterIds);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateImsMasterIds;
