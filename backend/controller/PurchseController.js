const Purchase = require("../model/PurchseSchema");
const Product = require("../model/SellerSchems");

// Purchase a product and handle payment
exports.purchaseProduct = async (req, res) => {
  try {
    const {
      productId,
      deliveryAddress,
      mobileNumber,
      preferredDeliveryTime,
      paymentMethod,
      promoCode,
      deliveryInstructions,
    } = req.body;

    const buyerId = req.user._id; // Assuming you're using authentication middleware

    // Validate the product existence
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
      });
    }

    // Create a new purchase record with pending payment status
    const purchase = new Purchase({
      buyerId,
      productId,
      deliveryAddress,
      mobileNumber,
      preferredDeliveryTime,
      paymentMethod,
      promoCode,
      deliveryInstructions,
      purchaseStatus: "pending", // Set the initial purchase status
    });

    await purchase.save();

    // Handle payment processing
    if (paymentMethod === "pay after payment") {
      // For "pay after payment", return the purchase record with a pending status
      return res.status(200).json({
        success: true,
        msg: "Purchase created successfully, payment pending.",
        purchase,
      });
    }

    // If immediate payment is required, initiate payment
    const paymentResponse = await initiatePayment(purchase); // Call your payment gateway function here

    if (paymentResponse.success) {
      // Update payment status on successful payment
      purchase.paymentStatus = "success";
      purchase.purchaseStatus = "confirmed"; // Change status to confirmed after payment
      await purchase.save();

      // Optionally, update the product status to sold or remove it from listings
      product.status = "sold"; // or any other logic you want to implement
      await product.save();

      return res.status(200).json({
        success: true,
        msg: "Payment successful! Purchase confirmed.",
        purchase,
      });
    } else {
      // Handle payment failure
      purchase.paymentStatus = "failed";
      await purchase.save();

      return res.status(400).json({
        success: false,
        msg: "Payment failed. Please try again.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

// Simulated function to initiate payment with a payment gateway
async function initiatePayment(purchase) {
  // Call the payment gateway's API and handle response
  // For example, using Stripe or PayPal API to process payment
  return { success: true }; // Simulating a successful payment for demonstration
}
