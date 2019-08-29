module.exports = (req, res, next) => {
    if(req.session.userId) next()
    else res.render('/', { error: 'You need to login first' })
}