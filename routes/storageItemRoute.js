const router = require("express").Router()
const StorageItemController = require("../controllers/storageItemController")

router.get("/add", StorageItemController.create)
router.get("/delete", StorageItemController.takeItem)
module.exports = router