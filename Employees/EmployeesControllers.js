const express       = require("express");
const Router        = express.Router();
const UsersModel    = require("./UsersModel");
const bcrypt        = require('bcryptjs');

/* { Login } */

Router.get("/login", (req, res) => {
    res.render("login.ejs")
});

/* { Register } */

Router.get("/Register", (req, res) => {
    res.render("Register.ejs")
});


/* { Save user } */

Router.post("/SaveRegister", (req, res) => {

    var Name     = req.body.Name;
    var Email    = req.body.Email;
    var Passwd   = req.body.Password;
    var UserName = req.body.UserName;

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(Passwd, salt)

    UsersModel.create({
        Name: Name,
        email: Email,
        password: hash,
        UserName: UserName

    }).then(() => {
        res.redirect("/login");
    }).catch((err) => {
        console.log(err);
    });

});
Router.post("/login/Authenticate", (req, res) => {
    const { Email, Password } = req.body;
    
    UsersModel.findOne({ where: {email: Email} }).then(user => {
        if(user){
            const correct = bcrypt.compareSync(Password, user.Password)

            if(correct){
                req.session.user = {
                    id: user.id,
                    email: user.Email
                }
            }
        }
    })

});

Router.get("/MainPage", (req, res, next) => {

    res.render("Dashboard");

});


module.exports = Router;