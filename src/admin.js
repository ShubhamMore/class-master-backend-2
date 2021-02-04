const User = require('./models/user.model');
const MembershipPlan = require('./models/membership-plan.model');
const StoragePackage = require('./models/storage-package.model');
const SMSPackage = require('./models/sms-package.model');
const ImsMasterId = require('./models/ims-master-id.model');
const AdminOnlineClassesKeys = require('./models/admin-online-classes-keys.model');

const admin = async () => {
  try {
    let admin = await User.findOne({ userRole: 'admin', email: 'theclassmaster20@gmail.com' });

    if (!admin) {
      admin = {
        name: 'Class Master',
        userRole: 'admin',
        email: 'theclassmaster20@gmail.com',
        phone: '9876543210',
        password: 'Yfe9XLiXHuk5+2iRvTSrcGzXxdpfTH2iqceXOfhSkUKRophoasvxG1BvlkJrfJPO',
        imsMasterId: 'IMS2020ADMIN000001',
        status: true,
      };

      const adminUser = new User(admin);
      const newAdminUser = adminUser.save();

      const imsMasterIds = new ImsMasterId();
      const newImsMasterIds = imsMasterIds.save();

      const adminOnlineClassesKeys = new AdminOnlineClassesKeys({
        imsMasterId: 'IMS2020ADMIN000001',
        accessKey: 'nJsoMVxVQqOHPgBD8rjKgQ',
        secretKey: 'OqzKTd7Y75F3d0HG5p6NrrmZlmrkcTDj',
      });
      const newAdminOnlineClassesKeys = adminOnlineClassesKeys.save();

      const membershipPlans = [
        {
          name: 'monthly',
          duration: '1',
          price: '1999',
        },
        {
          name: 'quarterly',
          duration: '3',
          price: '4999',
        },
        {
          name: 'half-yearly',
          duration: '6',
          price: '7999',
        },
        {
          name: 'yearly',
          duration: '12',
          price: '11999',
        },
      ];

      const storagePackages = [
        // {
        //   packageName: '1GB01M',
        //   storage: 1024,
        //   validity: '30',
        //   price: '100',
        //   status: true,
        // },
        // {
        //   packageName: '1GB03M',
        //   storage: 1024,
        //   validity: '90',
        //   price: '275',
        //   status: true,
        // },
        // {
        //   packageName: '1GB06M',
        //   storage: 1024,
        //   validity: '183',
        //   price: '500',
        //   status: true,
        // },
        // {
        //   packageName: '1GB12M',
        //   storage: 1024,
        //   validity: '365',
        //   price: '950',
        //   status: true,
        // },

        // {
        //   packageName: '2GB01M',
        //   storage: 2048,
        //   validity: '30',
        //   price: '200',
        //   status: true,
        // },
        // {
        //   packageName: '2GB03M',
        //   storage: 2048,
        //   validity: '90',
        //   price: '500',
        //   status: true,
        // },
        // {
        //   packageName: '2GB06M',
        //   storage: 2048,
        //   validity: '183',
        //   price: '950',
        //   status: true,
        // },
        // {
        //   packageName: '2GB12M',
        //   storage: 2018,
        //   validity: '365',
        //   price: '1800',
        //   status: true,
        // },

        {
          packageName: '5GB01M',
          storage: 5120,
          validity: '30',
          price: '500',
          status: true,
        },
        {
          packageName: '5GB03M',
          storage: 5120,
          validity: '90',
          price: '1350',
          status: true,
        },
        {
          packageName: '5GB06M',
          storage: 5120,
          validity: '183',
          price: '2600',
          status: true,
        },
        {
          packageName: '5GB12M',
          storage: 5120,
          validity: '365',
          price: '5000',
          status: true,
        },
      ];

      const smsPackages = [];

      const newMembershipPlans = MembershipPlan.insertMany(membershipPlans);
      const newStoragePackages = StoragePackage.insertMany(storagePackages);
      const newSMSPackages = SMSPackage.insertMany(smsPackages);

      try {
        Promise.all([
          newAdminUser,
          newImsMasterIds,
          newMembershipPlans,
          newStoragePackages,
          newSMSPackages,
          newAdminOnlineClassesKeys,
        ])
          .then((res) => {})
          .catch((e) => {
            throw new Error(e);
          });
      } catch (e) {
        throw new Error(e);
      }
    }
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = admin;
