const Router = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

const router = new Router();


router.get('/users', authMiddleware, adminController.getAllUsers);
router.get('/users/:id', authMiddleware, adminController.getUserById);
router.delete('/users/:id', authMiddleware, adminController.deleteUserById);

module.exports = router