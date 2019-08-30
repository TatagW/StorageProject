const express = require('express')
const session = require('express-session')
const app = express()
const port =  process.env.PORT || 3000
const UserController = require("./controllers/userController")
const isLogin = require('./middlewares/isLogin')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-appwww-form-urlencoded
app.use(session({
    secret: 'hacktivate',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(function(req, res, next) {
    res.locals.user = req.session.userId;
    next();
  }
)

app.set('view engine', 'ejs')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'havktivate',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.get("/", (req, res) => {
    res.render("homepage", { error: undefined })
})
app.post("/", UserController.login)
app.use("/item", require("./routes/itemRoute"))
app.use("/storage", require("./routes/storageRoute"))
app.use("/storageitem", isLogin, require("./routes/storageItemRoute"))
app.use("/user", require("./routes/userRoute"))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))