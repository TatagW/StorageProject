const router = require("express").Router()
const isLogin = require("../middlewares/isLogin")
const ItemController = require("../controllers/itemController")
router.get("/", isLogin, ItemController.findAll)
router.get("/add/:id", ItemController.createForm)
router.post("/add/:id", ItemController.create)
module.exports = router