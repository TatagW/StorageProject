const router = require("express").Router()
const isLogin = require('../middlewares/isLogin')
const ItemController = require("../controllers/itemController")

router.get("/", isLogin, ItemController.findAll)
router.get("/add/", isLogin, ItemController.createForm)
router.post("/add/", ItemController.create)
module.exports = router