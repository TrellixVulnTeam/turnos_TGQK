const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res){
    console.log('Endpoint de SignUp devolviendo data...');
}

module.exports = {
    signUp
};