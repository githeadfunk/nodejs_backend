var conn = require('./../connection.js');
var dbpool = conn.connection('world');

module.exports = {
  setup: function(app){
    console.log("in setup route1");
    app.use('/route1', function(req, res, next){
      console.log("route1 middleware", req.method);
      next();
    });
    app.get('/route1', this.route1get);
    app.post('/route1', this.route1post);
    app.put('/route1', this.route1put);
    app.delete('/route1', this.route1delete);
  },

  route1get: function(req, res){

    dbpool.getConnection(function(err, connection) {
      if(err) {
        console.log('Error message: ', err);
        res.send("Error connecting to db");
        return;
      }
      connection.query('select Name from city', function (error, results, fields) {
        connection.release();
        if (error) {
          console.log('Error message: ', err);
          res.send("Sth wrong with the query");
          return;
        }
        res.send(results);
      });
    });
  },

  route1post: function(req, res){
    res.send("route1 post");
  },

  route1put: function(req, res){
    res.send("this is put");
  },

  route1delete: function(req, res){
    res.send("this is delete");
  }
}