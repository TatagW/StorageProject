const { Item } = require("../models")

class ItemController{
    static createForm(req, res){
        let user = {
            id: 1
        }
        res.render("item/register", { user })
    }
    static create(req, res){
        const { name } = req.body
        Item.create({
            name,
            UserId: req.params.id
        })
        .then(success => {
            res.redirect(`/item/${req.params.id}`)
        })
        .then(err => {
            res.send(err)
        })
    }
}

module.exports = ItemController