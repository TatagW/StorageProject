const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("storage")
})

module.exports = router