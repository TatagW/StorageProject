const router = require("express").Router()
const ItemController = require("../controllers/itemController")
router.get("/", ItemController.findAll)
router.get("/add/", ItemController.createForm)
router.post("/add/", ItemController.create)
module.exports = router