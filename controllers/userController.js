const { User } = require("../models")
const hashPassword = require("../helpers/hashPassword")
class UserController {
    static findOne(req, res){
        User.findOne({
            where:{
                name: req.body.name,
                password: hashPassword(req.body.password)
            }
        })
        .then(user => {
            res.send(user)
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