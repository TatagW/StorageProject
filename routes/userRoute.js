const router = require("express").Router()
const UserController = require("../controllers/userController")

router.get("/add", UserController.create)

module.exports = router