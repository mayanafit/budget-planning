const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {

    static async findAll(req, res) {
        try {
            const users = await UserModel.findAll()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json({ "message": error })
        }
    }

    static async register(req, res) {
        const {name, password} = req.body.user
        try {
            if (!name) return res.status(400).json({ "message": "name cannot be empty." })
            else if (!password) return res.status(400).json({ "message": "password cannot empty" })
            const newUser = {
                name,
                password: bcrypt.hashSync(password, 10),
            }
            const registeredUser = await UserModel.insertOne(newUser)
            const access_token = jwt.sign(
                {
                    _id: registeredUser._id,
                    name: registeredUser.name,
                },
                process.env.JWT
            );
            return res.status(201).json({ access_token, name })
        } catch (error) {
            return res.status(500).json({ "message": error })
        }
    }

    static async login(req, res) {
        try {
            const {name, password} = req.body.user
            const user = await UserModel.findOne({ name });

            if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.status(404).json({ "message": "Invalid username or password"});
            } else {
                const access_token = jwt.sign(
                    {
                        _id: user._id,
                        name: user.name,
                    },
                    process.env.JWT
                );
                return res.status(200).json({ access_token, name });
            }
        } catch (error) {
            return res.status(500).json({ "message": error });
        }
    }
};

module.exports = UserController;