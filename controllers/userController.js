const { User } = require("../models")

class UserController {
    static create(req, res){
        User.create({
            name: "test3",
            address: "test2",
            password: "halo"
        })
        .then(success => {
            res.send(success)
        })
        .catch(err => {
            res.send(err.message)
        })
    }
}
module.exports = UserController