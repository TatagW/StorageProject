const { StorageItem } = require("../models")
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
}
module.exports = StorageItemController