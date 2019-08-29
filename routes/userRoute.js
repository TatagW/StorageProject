const router = require("express").Router()
const UserController = require("../controllers/userController")

router.post("/add", UserController.create)
router.get("/logout", UserController.logout)
module.exports = router