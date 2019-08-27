const { Storage } = require("../models")

class StorageController{
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
            res.send(err.message)
        })
    }
}

module.exports = StorageController