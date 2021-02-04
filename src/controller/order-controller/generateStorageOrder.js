const Razorpay = require('razorpay');
const Order = require('../../models/order.model');
const StoragePackage = require('../../models/storage-package.model');
const BranchStorage = require('../../models/branch-storage.model');
const PaymentReceipt = require('../../models/payment-receipt.model');
const errorHandler = require('../../handler/error.handler');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const getDate = () => {
  const d = new Date();
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const calcRemainingDays = (date) => {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const expiryDate = new Date(date).getTime();
  const today = new Date(getDate()).getTime();
  const dateDifference = expiryDate - today;
  return dateDifference / oneDayInMilliseconds;
};

const generateStorageOrder = async (req, res) => {
  try {
    let branchStorage = null;

    const storagePackage = await StoragePackage.findOne({ packageName: req.body.packageType });

    if (!storagePackage) {
      throw new Error('Storage Package not Found');
    }

    const receiptData = req.body;

    let amount = storagePackage.price;

    if (req.body.type === 'upgrade') {
      branchStorage = await BranchStorage.findOne({ branch: req.body.branch });

      if (!branchStorage) {
        throw new Error('Branch Storage not Found');
      }

      const remainingDays = calcRemainingDays(branchStorage.extraStorageExpireOn);

      const branchStoragePackage = await StoragePackage.findOne({
        packageName: branchStorage.storagePackage,
      });

      const remainingAmount =
        (+branchStoragePackage.price / +branchStoragePackage.validity) * +remainingDays;

      const upgradableAmount = Math.round(+(storagePackage.price - remainingAmount) * 1.1);

      amount = +upgradableAmount;
    }

    receiptData.amount = +amount;

    const paymentReceipt = new PaymentReceipt(receiptData);

    const options = {
      amount: Math.round(+paymentReceipt.amount * 100), // amount in the smallest currency unit
      currency: 'INR',
      receipt: `order_rcptid_${paymentReceipt._id}`,
      payment_capture: '0',
    };

    instance.orders.create(options, async (err, order) => {
      try {
        if (err) {
          throw new Error(err.error.description);
        }

        const orderDetails = {
          order_id: order.id,
          entity: order.entity,
          amount: order.amount.toString(),
          amount_paid: order.amount_paid.toString(),
          amount_due: order.amount_due.toString(),
          currency: order.currency,
          receipt: order.receipt,
          offer_id: order.offer_id,
          status: order.status,
          attempts: order.attempts.toString(),
          notes: order.notes,
          created_at: order.created_at,
        };

        const generatedOrder = new Order(orderDetails);

        paymentReceipt.orderId = generatedOrder._id;

        res.status(200).send({ paymentReceipt, order });

        await generatedOrder.save();
        await paymentReceipt.save();
      } catch (e) {
        errorHandler(e, 400, res);
      }
    });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = generateStorageOrder;
