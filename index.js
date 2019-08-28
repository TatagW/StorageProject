const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-appwww-form-urlencoded
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("homepage")
})
app.use("/item", require("./routes/itemRoute"))
app.use("/storage", require("./routes/storageRoute"))
app.use("/storageitem", require("./routes/storageItemRoute"))
app.use("/user", require("./routes/userRoute"))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))