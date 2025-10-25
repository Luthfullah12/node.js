const express = require("express")
const router = express.Router()
const userController = require("../controller/Usercontrol")

router.route("/add").post(userController.createUserData);
router.route("/get").get(userController.getAlluser);
router.route("/get/:id").get(userController.getid);
router.route("/Delete/:id").delete(userController.deleteid);
router.route("/update/:id").put(userController.dataupdate);



module.exports = router;