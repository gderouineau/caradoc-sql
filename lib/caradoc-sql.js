var params = require('../../../config/params/db');

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : params.data.host,
    user     : params.data.user,
    password : params.data.pass,
    database : params.data.db
});

exports.mysql = connection;