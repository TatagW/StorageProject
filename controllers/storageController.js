const { Storage, StorageItem } = require("../models")

class StorageController {
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
                res.send(err.message)
            })
    }

    static findAll(req, res) {
        Storage.findAll()
            .then((storages) => res.render('storage/main', { storages }))
            .catch(err => res.send(err))
    }
}

module.exports = StorageController