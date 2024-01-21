const Router = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

const router = new Router();


module.exports = router