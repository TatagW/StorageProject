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
        StorageItem.destroy({
            where: {
                id: req.body.storageItemId
            }
        })
        .then(()=> {
            
        })
    }
}
module.exports = StorageItemController
