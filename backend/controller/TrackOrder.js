const Purchase = require("../model/PurchseSchema");
const Product = require("../model/SellerSchems");

exports.trackOrder = async (req, res) => {
  try {
    const { purchaseId } = req.params; // Get purchase ID from route parameters

    // Find the purchase by ID
    const purchase = await Purchase.findById(purchaseId).populate("productId"); // Optionally populate product details

    if (!purchase) {
      return res.status(404).json({
        success: false,
        msg: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Order details retrieved successfully",
      purchase,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

// Update purchase status with tracking info
exports.updateOrderTracking = async (req, res) => {
  try {
    const { purchaseId, trackingId, carrier, estimatedDeliveryDate } = req.body;

    // Find and update the purchase
    const purchase = await Purchase.findByIdAndUpdate(
      purchaseId,
      {
        trackingId,
        carrier,
        estimatedDeliveryDate,
        purchaseStatus: "shipped", // Update status to shipped
      },
      { new: true }
    );

    if (!purchase) {
      return res.status(404).json({
        success: false,
        msg: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Order tracking updated successfully",
      purchase,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};
