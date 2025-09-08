const express = require("express")
const router = express.Router()
const userController = require("../controller/Usercontrol")

router.route("/add").post(userController.createUserData);
router.route("/get").get(userController.getAlluser);
router.route("/get").get(userController.getid);


module.exports = router 