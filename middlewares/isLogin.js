module.exports = (req, res, next) => {
    if(req.session.id) next()
    else res.render('/', { error: 'You need to login first' })
}