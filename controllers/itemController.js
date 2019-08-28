const { Item, User, StorageItem, Storage } = require("../models")

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
        .then(() => {
            return User.findOne({
                where: {
                    id: req.params.id
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
}

module.exports = ItemController