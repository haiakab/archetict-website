var express = require('express')
var DB = require('../../General/db.js');


module.exports.loginDB =  (Userinfo) => {
    console.log("validateUser " +Userinfo.name);
    let DbQuery="SELECT `name`,`email`,`password` " +
                "FROM `Users` " +
                "WHERE `email` = '" + Userinfo.email + "'"
                console.log(DbQuery);
    DbRes= DB.DbQuery(DbQuery);
    return DbRes;
}

