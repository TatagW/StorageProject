const { User, Item, StorageItem, Storage } = require("../models")
const hashPassword = require("../helpers/hashPassword")
class UserController {
    static login(req, res){
        User.findOne({
            where:{
                name: req.body.name,
                password: hashPassword(req.body.password)
            }
        })
        .then(user => {
            if(user){
                req.session.userId = user.id
                res.redirect("/item")
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
    static create(req, res){
        const { name, address, password } = req.body
        const user = {
            name,
            address,
            password
        }
        User.create(user)
        .then(success => {
            res.redirect("/")
        })
        .catch(err => {
            res.render("homepage", { error: err.message, user})
        })
    }
}
module.exports = UserController