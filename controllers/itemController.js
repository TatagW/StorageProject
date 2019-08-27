const { Item } = require("../models")

class ItemController{
    static create(req, res){
        const { UserId, name } = req.body
        Item.create({
            name,
            UserId
        })
        .then(success => {
            res.send(success)
        })
        .then(err => {
            res.send(err)
        })
    }
}

module.exports = ItemController