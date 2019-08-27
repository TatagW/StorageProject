const router = require("express").Router()
const ItemController = require("../controllers/itemController")

router.get("/add", ItemController.create)

module.exports = router