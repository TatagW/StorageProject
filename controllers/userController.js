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
            if(user){

                res.render("item/main")
            }else{
                res.render("homepage", {
                    error: "User doesn't exist"
                })
            }
        })
        .catch(err => {
            res.send(err.message)
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