const express = require('express')
const app = express()
const port = 3000
const { User, StorageItem, Storage, Item } = require("./models")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
    User.create({
        name: "test3",
        address: "test2",
        password: "halo"
    })
    .then(success => {
        res.send(success)
    })
    .catch(err => {
        res.send(err.message)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))