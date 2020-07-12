const ClassMasterIds = require('../models/class-master-ids.model');

const getClassMasterIds = async (type) => {
  if (type !== 'institute' && type !== 'employee' && type !== 'student') {
    throw new Error('Invalid User Role');
  }
  const classMasterIds = await ClassMasterIds.findOne();

  if (!classMasterIds) {
    throw new Error('Class Master Ids Not Available, please contact Admin');
  }

  let id = classMasterIds[type];
  id++;
  const idType = type === 'institute' ? 'INST' : type === 'employee' ? 'EMP' : 'ST';

  const date = new Date();
  const classMasterId = `CM${date.getFullYear() + idType + id.toString().padStart(6, '0')}`;

  classMasterIds[type] = id;

  await classMasterIds.save();

  return classMasterId;
};

module.exports = getClassMasterIds;
