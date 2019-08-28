module.exports = (password) => {
    const crypto = require('crypto');

    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
                    .update(password)
                    .digest('hex');
    return hash
}