const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError.js');
const User = require('../models/models.js')

const generateJwt = (email, id) => {
    return jwt.sign(
        {id: id, email: email}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}
 


class UserController {

    async registration(req, res, next) {
        const {email, password} = req.body;


        if (!email || !password) {
            return next(ApiError.badRequest("Something wrong with email or password."));
        };

        const candidate = await User.findOne({where: {email}});

        if (candidate) {
            return next(ApiError.badRequest("Already exist."))
        };

        const hashPassword = await bcrypt.hash(password, 5);

        const user = await User.create({email, password: hashPassword});

        const token = generateJwt(user.id, user.email);

        return res.json(token);
    }

    async login(req, res, next) {
        const {email, password} = req.body

        const user = await User.findOne({where: {email}});

        if (!user) {
            return next(ApiError.badRequest("User doesn't exist."));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);

        if(!comparePassword) {
            return next(ApiError.badRequest("Something wrong with password."))
        }

        const token = generateJwt(user.id, user.email)

        return res.json(token)

    }


}

module.exports = new UserController()