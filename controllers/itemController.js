const { Item, User, StorageItem, Storage } = require("../models")

class ItemController {

    static createForm(req, res) {
        let user = {
            id: 1
        }
        res.render("item/register", { user })
    }
    static create(req, res) {
        const { name } = req.body
        Item.create({
            name,
            UserId: req.session.userId
        })
            .then(() => {
                return User.findOne({
                    where: {
                        id: req.session.userId
                    },
                    include: [
                        {
                            model: Item,
                            include: [
                                {
                                    model: StorageItem,
                                    include: [
                                        {
                                            model: Storage
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                })

            })
            .then(user => {
                res.render("item/main", { user })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static findAll(req, res) {
        Item.findAll({ where: { id: req.session.userId } }, {
            include: [{
                model: Storage
            }]
        })
            .then(items => res.render("item/main", { items }))
            .catch(err => res.send(err.message))
    }
}

module.exports = ItemController