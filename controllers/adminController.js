const ApiError = require('../error/ApiError.js');
const User = require('../models/models.js');

class AdminController {

    async getAllUsers(req, res, next) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (error) {
            return next(ApiError.internalServerError("Internal Server Error"));
        }
    }

    async getUserById(req, res, next) {
        const userId = req.params.id;

        if (!userId) {
            return next(ApiError.badRequest("User ID is required."));
        }

        try {
            const user = await User.findByPk(userId);

            if (!user) {
                return next(ApiError.notFound("User not found."));
            }

            return res.json(user);
        } catch (error) {
            return next(ApiError.internal("Internal Server Error"));
        }
    }

    async deleteUserById(req, res, next) {
        const userId = req.params.id;

        if (!userId) {
            return next(ApiError.badRequest("User ID is required."));
        }

        try {
            const user = await User.findByPk(userId);

            if (!user) {
                return next(ApiError.notFound("User not found."));
            }

            await user.destroy();

            return res.json({ message: "User deleted successfully." });
        } catch (error) {
            return next(ApiError.internal("Internal Server Error"));
        }
    }
}

module.exports = new AdminController();
