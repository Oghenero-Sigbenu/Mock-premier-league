// const bcrypt = require('bcryptjs');  //importing bcryptjs
// const jwt = require("jsonwebtoken"); //importing jsonwebtoken

// const Admin = require("../models/admin");

// //user signUp
// exports.signUp = (req, res, next) => {
//     const { firstName,
//         lastName,
//         email,
//         password,
//         username,
//         category
//     } = req.body;

//         //if any of the input fields is empty display an error message
//         if (!firstName || !lastName || !email || !username || !password || !category) {
//             res.status(400).json({
//                 msg:
//             "All Fields are required except profile image"
//             })
//         }
//         else if(category == 2){
//         Admin.findOne({
//             where:{
//             email
//         }
//     })
//         .then((admin) => {
//             if (admin) {
//                 return res.status(400).json({ msg: "adminUser already exist" })
//             } 
//             else {  
//                 let hashedPassword;
//                 try {
//                     const salt = bcrypt.genSaltSync(10);
//                     hashedPassword = bcrypt.hashSync(password, salt);
//                 } catch (error) {
//                     throw error;
//                 }
//                 Admin.create({
//                     firstName,
//                     lastName,
//                     email,
//                     username,
//                     password: hashedPassword,
//                     // isAdmin
//                 })
//                     .then(admin => {
//                         jwt.sign(
//                             { id: admin.id },
//                             process.env.AUTH_SECRET_KEY,
//                             { expireIn: "2h" },
//                             (err, token) => {
//                                 res.json({
//                                     token,
//                                     admin: {
//                                         id: admin.id,
//                                         firstName: admin.firstName,
//                                         lastName: admin.lastName,
//                                         email: admin.email,
//                                         username:admin.username,
//                                         password: admin.password.hashedPassword

//                                     }
//                                 })
//                             }
//                         )
//                         // res.json(user)
//                     })
//                     .catch(err => res.json({ msg: "failed to create account" }))
//             }
//         })
//         .catch(err => res.json({ msg: "failed to create account" }))

//     }else{
//         console.log("Admin Registration");
//     }
// }


// exports.getAllAdmin = (req, res, next) => {
//     User.findAll()
//         .then(admin => {
//             res.json(admin)
//         })
//         .catch(err => res.json({ msg: "failed" }))
// }
