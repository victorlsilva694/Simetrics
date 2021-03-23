const Sequelize = require("sequelize");
const Connection = require("../Schema/Connection");

const UsersModel = Connection.define('simetrics',{

    Name:{
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
    UserName:{
        type: Sequelize.STRING,
    }
});

UsersModel.sync({force: false}).then(() => {});
module.exports = UsersModel;