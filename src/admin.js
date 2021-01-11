const User = require('./models/user.model');
const MembershipPlan = require('./models/membership-plan.model');
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
      const newMembershipPlans = MembershipPlan.insertMany(membershipPlans);

      try {
        Promise.all([newAdminUser, newImsMasterIds, newMembershipPlans, newAdminOnlineClassesKeys])
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
