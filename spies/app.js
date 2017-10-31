var db = require('./db');

module.exports.handleSignup = (email,password)=>{
    //check email already exist
     
    //save the user to the database 
    db.saveUser({email,password});

    //send the welcome email
};