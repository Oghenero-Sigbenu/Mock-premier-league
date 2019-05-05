require("dotenv").config(); // allows our project read variables from .env files
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');


//Database ORM for NodeJs
const Sequelize = require("../backend-developers-test/config/database");

// //models
 const userModel = require("./models/user");

// //routes
 const userRoutes = require("./routes/user");
 const authRoutes = require("./routes/auth");
 const teamRoutes = require("./routes/team");
 const fixtureRoutes = require("./routes/fixtures");


const app = express();

app.use(express.json());

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/team", teamRoutes);
app.use("/api/v1/fixture", fixtureRoutes);

app.use((req, res, next)=> {
    res.send("<h2> Page Not Found </h2>");   
});


Sequelize.sync()
    //this creates a server and listen to the server
    .then(() => {
        app.listen(3000, () => console.log("App is running on Port 3000"))
            })
            // .catch(err => console.log("Error loading"))




