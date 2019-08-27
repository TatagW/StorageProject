const router = require("express").Router()
const StorageItemController = require("../controllers/storageItemController")

router.get("/add", StorageItemController.create)

module.exports = router