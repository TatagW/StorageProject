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
            res.render("item/register", { storages })
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static create(req, res) {
        let item = null
        const { name } = req.body
        Item.create({
            name,
            UserId: req.session.userId
        })
        .then(itemData => {
            item = itemData
            return StorageItem.create({
                ItemId: item.id,
                StorageId: req.body.StorageId
            })    
        })
        .then(storageItem => {
            res.redirect("/item")
        })
        .catch(err => {
            res.render("item/register", { error: err.message })
        })
    }

    static findAllBali(req, res){
        Item.bali( req.session.userId )
        .then(items => {
            // res.send(items)
            res.render("item/main", { items })
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static findAllBalikpapan(req, res){
        Item.balikpapan( req.session.userId )
        .then(items => {
            // res.send(items)
            res.render("item/main", { items })
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static findAllSemarang(req, res){
        Item.semarang( req.session.userId )
        .then(items => {
            // res.send(items)
            res.render("item/main", { items })
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static findAllSurabaya(req, res){
        Item.surabaya( req.session.userId )
        .then(items => {
            // res.send(items)
            res.render("item/main", { items })
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static findAll(req, res) {
        Item.findAll({ 
            where: { 
                UserId: req.session.userId 
            },
            order: [["name", "ASC"]],
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