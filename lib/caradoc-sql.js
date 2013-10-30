var params = require('../../../config/params/db');

var mysql = require('mysql');

module.exports = mysql.createConnection({
    host     : params.data.host,
    user     : params.data.user,
    password : params.data.pass,
    database : params.data.db
});
