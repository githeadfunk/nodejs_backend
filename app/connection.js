var mysql = require('mysql');
var config = require('./config.js');

module.exports = {
  connection: function(db){
    return mysql.createPool({
      host     : config.db_url,
      user     : config.user,
      password : config.password,
      database : db
    });
  }
}