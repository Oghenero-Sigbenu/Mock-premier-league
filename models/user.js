const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class User extends Sequelize.Model{}
    //creating User table and the following fields
    User.init({
        firstName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        username:{
            type: Sequelize.STRING,
            allowNull: false
        },
        role:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{sequelize})

    module.exports = User;
