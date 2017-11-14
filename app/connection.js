var mysql = require('mysql');

module.exports = {
  connection: function(db){
    return mysql.createPool({
      host     : 'localhost',
      user     : 'root',
      password : 'wyhnfmysql',
      database : db
    });
  }
}