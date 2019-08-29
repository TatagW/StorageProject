const router = require("express").Router()
const UserController = require("../controllers/userController")

router.post("/add", UserController.create)

module.exports = router