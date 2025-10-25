const express = require("express")
const router = express.Router()
const productController = require("../controller/userproduct")

router.route("/add").post(productController.createproduct);
router.route("/get").get(productController.getallproduct)
router.route("/get/:id").get(productController.getproductbyid)
router.route("/add/order").post(productController.creatorderdata)
router.route("/add/wishlist").post(productController.creatwishlist)
router.route("/get/orderdetails/:id").get(productController.getOrderDetails)
router.route("/get/wishlistdetails/:id").get(productController.getwishlistdetails)

module.exports = router;