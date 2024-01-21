const jwt = require('jsonwebtoken')
const User = require('../models/models')

module.exports = async function(req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer 
        if (!token) {
            return res.status(401).json({ message: "Not authorized." })
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded


        if (req.baseUrl.startsWith('/api/admin') && decoded.role !== 'ADMIN') {
            return res.status(401).json({ error: "Not authorized." })
        }

        next()
    } catch (e) {
        res.status(401).json({ message: "Not authorized." })
    }
};
