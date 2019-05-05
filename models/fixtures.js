const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Team = require("./team");

class Fixtures extends Sequelize.Model{}
    Fixtures.init({
        team_A:{
            type: Sequelize.STRING,
            allowNull: false
            },
        team_B:{
            type: Sequelize.STRING,
            allowNull: false
            },
        date:{
           type: Sequelize.DATE,
           
           allowNull: false
        }

    },{sequelize})

    //linking Team table to the fixtures table
//    Fixtures.hasMany(Team);

 module.exports = Fixtures;