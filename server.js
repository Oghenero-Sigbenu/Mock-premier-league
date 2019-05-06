var PORT = process.env.PORT || 3000;
require("dotenv").config(); // allows our project read variables from .env files
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');


//Database ORM for NodeJs
const Sequelize = require("./config/database");

// //models
 const userModel = require("./models/user");

// //routes
 const userRoutes = require("./routes/user");
 const authRoutes = require("./routes/auth");
 const teamRoutes = require("./routes/team");
 const fixtureRoutes = require("./routes/fixtures");


const app = express();

// This parses all json request so we can access
// its contents via 'req.body' object
app.use(express.json());

// Create a static directory for our uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/team", teamRoutes);
app.use("/api/v1/fixture", fixtureRoutes);
app.use("/", (req, res, next)=> {
    res.send("<h2>Wlcome to Mock Premiere League</h2>")
})
app.use((req, res, next)=> {
    res.send("<h2> Page Not Found </h2>");   
});


Sequelize.sync()
    //this creates a server and listen to the server
    .then(() => {
        app.listen(3000, () => console.log("App is running on Port 3000"))
            })
            // .catch(err => console.log("Error loading"))




