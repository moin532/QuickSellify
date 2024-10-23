const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
  buyerId: {
    type: mongoose.Schema.ObjectId, // Reference to buyer (User schema)
    ref: "User",
    required: true,
  },
  productId: {
    type: mongoose.Schema.ObjectId, // Reference to purchased product (Product schema)
    ref: "Product",
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true, // Full address where product is to be delivered
  },
  mobileNumber: {
    type: String,
    required: true, // Buyer’s contact number
  },
  preferredDeliveryTime: {
    type: String, // Optional, buyer’s preferred time for delivery
  },
  paymentMethod: {
    type: String,
    enum: ["Credit Card", "Debit Card", "UPI", "Net Banking", "Wallet"],
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },

  promoCode: {
    type: String, // Optional promo code applied
  },
  satisfactionGuarantee: {
    type: Boolean,
    default: true, // Guarantee that payment will only be made if buyer is satisfied
  },
  purchaseStatus: {
    type: String,
    enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  deliveryInstructions: {
    type: String, // Optional field for any special instructions for delivery
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  trackingId: {
    type: String, // Unique tracking ID for the order
    default: null,
  },
  carrier: {
    type: String, // Carrier name (e.g., FedEx, UPS)
    default: null,
  },
  estimatedDeliveryDate: {
    type: Date, // Estimated delivery date
    default: null,
  },
});

module.exports = mongoose.model("Purchase", PurchaseSchema);
