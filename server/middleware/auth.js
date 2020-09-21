const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    const access_token = req.headers.access_token
    if (!access_token) return res.status(401).json({"message": "Please login to access this page."})
    const userData = jwt.verify(access_token, process.env.JWT)
    req.userId = userData._id
    UserModel.findOne({ name: userData.name })
    .then(result => {
        if (result) return next()
    })
    .catch(err => res.status(401).json({"message": "Please login to access this page."}))
}

module.exports = authentication