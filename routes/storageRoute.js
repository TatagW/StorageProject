const router = require("express").Router()
const StorageController = require('../controllers/storageController');

router.get("/", StorageController.findAll)

module.exports = router