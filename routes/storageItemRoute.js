const router = require("express").Router()
const StorageItemController = require("../controllers/storageItemController")

router.get("/add", StorageItemController.create)
router.post("/delete", StorageItemController.takeItem)
module.exports = router