const { User, Item, StorageItem, Storage } = require("../models")
const hashPassword = require("../helpers/hashPassword")
class UserController {
    static login(req, res){
        if(!req.body.name){
            res.render("homepage", {error: "Please put your name first"})
        }else if(!req.body.password){
            res.render("homepage", {error: "Password can't be empty"})
        }
        else{
            User.findOne({
                where:{
                    name: req.body.name,
                }
            })
            .then(user => {
                if(user){
                    if(user.password !== hashPassword(req.body.password)){
                        res.render("homepage", {error: "wrong password"})
                    }
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
    }
    static logout(req, res){
        req.session.destroy(err => {
            res.redirect("/")
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