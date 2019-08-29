const { StorageItem, Storage } = require("../models")
class StorageItemController {
    static create(req, res){
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

    static takeItem(req, res){
        StorageItem.findOne({
            where: {
                id: req.body.storageItemId
            }
        })
        .then(storageItem=> {
            return Storage.findOne({
                where: {
                    id: storageItem.StorageId
                }
            })
        })
        .then(storage => {
            return Storage.update({
                capacity: storage.capacity + 1
            },
            {
                where: {
                    id: storageItem.StorageId
                }
            })
        })
        .then(() => {
            StorageItem.destroy({
                where: {
                    id: req.body.storageItemId
                }
            })
        })
        .then(()=> {
            res.redirect("/item")
        })
        .catch(err => {
            res.send(err.message)
        })
    }
}
module.exports = StorageItemController
