const Product = require("../model/SellerSchems");
// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();

    return res.status(201).json({
      success: true,
      msg: "Product added successfully",
      product: savedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Failed to add product",
      error: error.message,
    });
  }
};

// Update product after purchase
exports.updateProductAfterPurchase = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { status: "sold", buyerId: req.body.buyerId },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Failed to update product",
      error: error.message,
    });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get product ID from request parameters
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Failed to delete product",
      error: error.message,
    });
  }
};

// Quality check function for admin approval
exports.qualityCheckApproval = async (req, res) => {
  try {
    const { id } = req.params; // Get product ID from request parameters
    const { qualityCheck } = req.body; // Get quality check result from request body

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { qualityCheck, status: qualityCheck ? "approved" : "rejected" }, // Update quality check and status
      { new: true } // Return the updated product
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Quality check status updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Failed to update quality check status",
      error: error.message,
    });
  }
};

// Get a single product by ID
exports.getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the product by its ID
    const product = await Product.findById(id).populate(
      "sellerId",
      "username email"
    );
    if (!product) {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

// Update product details
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get id from request parameters
    const updates = req.body; // Get updates from request body

    // Find the product by ID and update it with the new data
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
      runValidators: true, // Validate data before update
    });

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};
