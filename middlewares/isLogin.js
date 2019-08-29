module.exports = (req, res, next) => {
    if(req.session.userId) next()
    else res.render('homepage', { error: 'You need to login first' })
}