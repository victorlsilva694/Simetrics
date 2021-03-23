const express            = require("express");
const app                = express();
const BodyParser         = require("body-parser");
const connection         = require("./Schema/connection");
const UsersModel         = require("./Employees/UsersModel");
const RouterEmployees    = require("./Employees/EmployeesControllers");
const bcrypt             = require('bcryptjs');

/* { View engine } */
app.set('view engine','ejs');
app.use(express.static('public'));

/* { Body-Parser } */
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());

/* { Connection to DataBase } */
connection
    .authenticate()
    .then(() => {
        console.log("Sucessfull Connection")
    })
    .catch((err) => {
        console.log(err);
    });



/* { Initial route } */
app.get("/", (req, res) => {
    res.render("index");
});
app.use("/", RouterEmployees);

/* { Server running } */
app.listen(8080,()=>{console.log("200");})