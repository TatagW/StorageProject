const router = require("express").Router()
const isLogin = require('../middlewares/isLogin')
const ItemController = require("../controllers/itemController")

router.get("/", isLogin, ItemController.findAll)
router.get("/bali", isLogin, ItemController.findAllBali)
router.get("/semarang", isLogin, ItemController.findAllSemarang)
router.get("/balikpapan", isLogin, ItemController.findAllBalikpapan)
router.get("/surabaya", isLogin, ItemController.findAllSurabaya)
router.get("/add/", isLogin, ItemController.createForm)
router.post("/add/", ItemController.create)
module.exports = router