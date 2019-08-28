const { User } = require("../models")

class UserController {
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