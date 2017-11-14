var route1 = require('./route1.js');
var route2 = require('./route2.js');


module.exports = function(app){
  route1.setup(app);
  route2.setup(app);
}