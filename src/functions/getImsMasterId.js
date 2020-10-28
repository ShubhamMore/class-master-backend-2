const ImsMasterId = require('../models/ims-master-id.model');

const getImsMasterId = async (type) => {
  if (type !== 'institute' && type !== 'employee' && type !== 'student') {
    throw new Error('Invalid User Role');
  }
  let imsMasterIds = await ImsMasterId.findOne();

  if (!imsMasterIds) {
    imsMasterIds = new ImsMasterId();
    await imsMasterIds.save();
  }

  let id = imsMasterIds[type];

  id++;

  const idType = type === 'institute' ? 'INST' : type === 'employee' ? 'EMP' : 'ST';

  const date = new Date();
  const imsMasterId = `IMS${date.getFullYear() + idType + id.toString().padStart(6, '0')}`;

  imsMasterIds[type] = id;

  await imsMasterIds.save();

  return imsMasterId;
};

module.exports = getImsMasterId;
