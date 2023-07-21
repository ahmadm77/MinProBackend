const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken : (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const verifiedToken = jwt.verify(token, 'ahmad123');
    req.user = verifiedToken;
    next();
  },
}