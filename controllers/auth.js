const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Role = require("../controllers/role")

const User = require("../models/user");
// const Admin = require("../models/admin");

exports.postLogin = (req, res, next) => {
    const {
        email,
        password
    } = req.body;

    if (!email || !password) {
        res.status(400).json({ msg: "All fields are required" });
    } else {
        User.findOne({
            where: {
                email
            }
        })
            .then((user) => {
                if (!user) {
                    Admin.findOne({
                        where: {
                            email
                        }
                    })
                        .then((admin) => {
                            if (!admin) {
                                res.status(400).json({ msg: "User does not exist" });
                            } else {
                                // console.log("Admin Login")
                            bcrypt
                                .compare(password, admin.password)
                                .then(match => {
                                    if(!match) {
                                    return res.status(400).json({ msg: "Invalid Password" });
                                    }
                                    //login as admin and a token is created and assigned to the admin
                                    jwt.sign(
                                        {adminId : admin.id},
                                        process.env.AUTH_SECRET_KEY,
                                        {expiresIn : "1h"},
                                        (err, token) => {
                                            res.json({
                                                token,
                                                type: "admin",
                                                admin,
                                                role: Role.admin
                                            })
                                        }

                                    )
                                })

                            }
                        })
                        .catch((err) => console.log(err))
                } else {
                    console.log("User login")
                bcrypt
                    //compare inputed password and admin.password
                    .compare(password, user.password)
                    //if inputed password does not match
                    .then(match => {
                        if(!match){
                        return res.status(400).json({ msg: "Invalid Password" });
                        }
                    //login as admin and a token is created and assigned to the admin
                    jwt.sign(
                        {userId : user.id},
                        process.env.AUTH_SECRET_KEY,
                        {expiresIn : "1h"},
                        (err, token) => {
                            res.json({
                                token,
                                user
                            })
                        }
                    )
                    })
                }
            })
            .catch((err) => console.log(err))
    }
}