const express = require('express')
const app = express()
const port = 3000
const { User, StorageItem, Storage, Item } = require("./models")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use("/item", require("./routes/itemRoute"))
app.use("/storage", require("./routes/storageRoute"))
app.use("/storageitem", require("./routes/storageItemRoute"))
app.use("/user", require("./routes/userRoute"))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))