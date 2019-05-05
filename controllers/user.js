const bcrypt = require('bcryptjs');  //importing bcryptjs
const jwt = require("jsonwebtoken"); //importing jsonwebtoken

const User = require("../models/user");

//user signUp
exports.signUp = (req, res, next) => {
    const { firstName,
        lastName,
        email,
        password,
        username
    } = req.body;

    //if any of the input fields is empty display an error message
    if (!firstName || !lastName || !email || !username || !password) {
        return res.status(400).json({
            msg:
                "All Fields are required except profile image"
        })
    }
    User.findOne({
        where: {
            email
        }
    })
        .then((user) => {
            if (user) {
                return res.status(400).json({ msg: "User already exist" })
            }
            else {
                let hashedPassword;
                try {
                    const salt = bcrypt.genSaltSync(10);
                    hashedPassword = bcrypt.hashSync(password, salt);
                } catch (error) {
                    throw error;
                }

                let role = req.params.admin == "admin" ? "admin" : "user";
                User.create({
                    firstName,
                    lastName,
                    email,
                    username,
                    password: hashedPassword,
                    role
                })
                    .then(user => {
                        const token = jwt.sign({ id: user.id }, process.env.AUTH_SECRET_KEY, { expiresIn: "2h" });
                        const authenticatedUser = {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            username: user.username
                        }
                        return res.json({
                            access_token: token,
                            user: authenticatedUser
                        });
                    })
                    .catch(err => res.json({ msg: err.message || "failed to create account" }))
            }
        })
        .catch(err => res.json({ msg: err.message || "failed to create account" }));
}


exports.getAllUser = (req, res, next) => {
    User.findAll()
        .then(user => {
            res.json(user)
        })
        .catch(err => res.json({ msg: "failed" }))
}

exports.getAllAdmin = (req, res, next) => {
    User.find({
        role: "admin",
        })
        .then(user => {
            res.json(user);
        })
        .catch(err => res.json({ msg: "failed" }))
}
