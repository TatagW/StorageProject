const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("storage list")
})

module.exports = router