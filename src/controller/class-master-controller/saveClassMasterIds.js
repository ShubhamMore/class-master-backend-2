const ClassMasterIds = require('../../models/class-master-ids.model');
const errorHandler = require('../../handler/error.handler');

const updateClassMasterIds = async (req, res) => {
  try {
    let classMasterIds = await ClassMasterIds.findByIdAndUpdate(req.body._id, req.body);

    if (!classMasterIds) {
      const classMasterIds = new ClassMasterIds(req.body);
      await classMasterIds.save();
    }

    res.status(201).send(classMasterIds);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateClassMasterIds;
