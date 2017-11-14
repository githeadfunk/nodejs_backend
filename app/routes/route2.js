module.exports = {
  setup: function(app){
    app.get('/route2', this.route2get);
    app.post('/route2', this.route2post);
  },

  route2get: function(req, res){
    res.send("route2 get");
  },

  route2post: function(req, res){
    res.send("route2 post");
  }
}