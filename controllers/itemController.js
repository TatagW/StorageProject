const { Item, User, StorageItem, Storage } = require("../models")
const Sequelize = require('sequelize')

class ItemController {

    static createForm(req, res) {
        const Op = Sequelize.Op
        Storage.findAll({
            where: {
                capacity: {
                    [Op.gt]: 0 
                }
            }
        })
        .then(storages => {
            res.render("item/add", { storages })
        })
        .catch(err => {
            res.send(err.message)
        })
        
    }
    static create(req, res) {
        const { name } = req.body
        Item.create({
            name,
            UserId: req.session.userId
        })
            .then(item => {
                res.redirect("/item/main")
            })
            .catch(err => {
                res.render("item/register", { error: err.message })
            })
    }

    static findAll(req, res) {
        Item.findAll({ 
            where: { 
                UserId: req.session.userId 
            },
            order: [["createdAt", "ASC"]]
        }, {
            include: [{
                model: StorageItem,
                include: [
                    {
                        model: Storage
                    }
                ]
            }]
        })
            .then(items => res.render("item/main", { items }))
            .catch(err => res.send(err.message))
    }
}

module.exports = ItemController