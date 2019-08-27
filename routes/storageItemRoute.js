const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("storageitem")
})

module.exports = router