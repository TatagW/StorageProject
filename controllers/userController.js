const { User, Item, StorageItem, Storage } = require("../models")
const hashPassword = require("../helpers/hashPassword")
class UserController {
    static login(req, res){
        User.findOne({
            where:{
                name: req.body.name,
                password: hashPassword(req.body.password)
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
        .then(user => {
            // res.send(user)
            res.render("item/main", { user })
        })
        .then(err => {
            res.send(err)
        })
    }
    static createForm(req, res){
        res.render('user/register', {error: undefined, user: undefined})
    }
    static create(req, res){
        const { name, address, password } = req.body
        const user = {
            name,
            address,
            password
        }
        User.create(user)
        .then(success => {
            res.send(success)
        })
        .catch(err => {
            res.render("user/register", { error: err.message, user})
        })
    }
}
module.exports = UserController