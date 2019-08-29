const { StorageItem, Storage, Item } = require("../models")
class StorageItemController {
    static create(req, res) {
        const { StorageId, ItemId } = req.body
        StorageItem.create({
            StorageId,
            ItemId
        })
            .then(success => {
                res.send(success)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static takeItem(req, res) {
        let storageId = null
        let itemId = null

        StorageItem.findOne({
            where: {
                id: req.body.storageItemId
            }
        })
            .then(storageItem => {
                storageId = storageItem.StorageId
                itemId = storageItem.ItemId
                return Storage.findOne({
                    where: {
                        id: storageId
                    }
                })
            })
            .then(storage => {
                console.log(storageId)
                return Storage.update({
                    capacity: storage.capacity + 1
                },
                    {
                        where: {
                            id: storageId
                        }
                    })
            })
            .then(() => {
                console.log(itemId)
                return StorageItem.destroy({
                    where: {
                        id: req.body.storageItemId
                    }
                })
            })
            .then(() => {
                console.log(itemId)
                return Item.destroy({
                    where: {
                        id: itemId
                    }
                })

            })
            .then(() => res.redirect("/item"))
            .catch(err => {
                res.send(err.message)
            })
    }
}
module.exports = StorageItemController
