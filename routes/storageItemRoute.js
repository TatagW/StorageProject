const router = require("express").Router()
const StorageItemController = require("../controllers/storageItemController")

const isLogin = require('../middlewares/isLogin')

// router.get("/add", isLogin, StorageItemController.create)
router.post("/delete", StorageItemController.takeItem)
module.exports = router