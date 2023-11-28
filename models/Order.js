const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    order: [
      {
        type: Schema.Types.ObjectId,
        ref: 'product',
      },
    ],
    customer: [
      {
        type: Schema.Types.ObjectId,
        ref: 'customer',
      },
    ],
    status: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('order', OrderSchema);
