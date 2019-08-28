const router = require("express").Router()
const ItemController = require("../controllers/itemController")

router.get("/add/:id", ItemController.createForm)
router.post("/add/:id", ItemController.create)
module.exports = router