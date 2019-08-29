const router = require("express").Router()
const StorageController = require('../controllers/storageController');
const ItemController = require("../controllers/itemController")
const isLogin = require('../middlewares/isLogin')

router.get("/", isLogin, StorageController.findAll)

module.exports = router