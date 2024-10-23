const express = require("express");
const {
  addProduct,
  updateProductAfterPurchase,
  updateProduct,
  qualityCheckApproval,
  getSingleProduct,
} = require("../controller/SellerController");
const router = express.Router();

router.route("/addProduct").post(addProduct);
router.route("/update/product/:id").post(updateProductAfterPurchase);
router.route("/update/seller/product").post(updateProduct);
router.route("/quality/check/:id").post(qualityCheckApproval);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;
