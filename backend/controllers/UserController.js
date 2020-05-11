import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import keys from '../config/keys.js';
const UserController = {
    getAll(req, res) {
        User.find()
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send(error)
            })
    },
    register(req, res) {
        req.body.role = 'customer' //forzamos al role a ser customer
        User.create(req.body)
            .then(user => res.status(201).send(user))
            .catch(error => {
                console.error(error);
                res.status(500).send(error)
            })
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email
            })
            if (!user) {
                res.status(400).send({
                    message: 'Wrong credentials'
                });
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                res.status(400).send({
                    message: 'Wrong credentials'
                });
            }
            const token = jwt.sign({
                _id: user._id
            }, keys.jwt_auth_secret, {
                expiresIn: '2y'
            });
            await User.findByIdAndUpdate(user._id, {
                $push: {
                    tokens: token
                }
            });
            res.json({
                user,
                token,
                message: 'Welcome Mr. ' + user.email
            });
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'There was a problem trying to log in'
            })
        }
    },
    async update(req, res) {
        try {
            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 9);
            }
            User.findByIdAndUpdate(req.params.id, req.body, {
                    new: true
                })
                .then(user => res.send(user))
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    delete(req, res) {
        User.findByIdAndDelete(req.params.id)
            .then(user => res.send(user))
            .catch(error => {
                console.error(error);
                res.status(500).send(error)
            })
    }
}
export default UserController;