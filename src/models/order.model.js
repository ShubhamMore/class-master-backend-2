const mongoose = require('mongoose');

// order registration schema
const orderSchema = mongoose.Schema({
  order_id: {
    type: String,
    require: true,
  },
  entity: {
    type: String,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
  amount_paid: {
    type: String,
    require: true,
  },
  amount_due: {
    type: String,
    require: true,
  },
  currency: {
    type: String,
    require: true,
  },
  receipt: {
    type: String,
    require: true,
  },
  offer_id: {
    type: String,
  },
  status: {
    type: String,
    require: true,
  },
  attempts: {
    type: String,
    require: true,
  },
  notes: [],
  created_at: {
    type: Date,
    require: true,
  },
});

orderSchema.methods.toJSON = function () {
  const order = this;
  const orderObject = order.toObject();

  delete orderObject.__v;

  return orderObject;
};

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
