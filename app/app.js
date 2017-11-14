var express = require('express');
var bodyParser = require('body-parser');
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
var methodOverride = require('method-override');
var domain = require('domain');
var app = express();

var d = domain.create();
d.on('error', function(err){
    // handle the error safely
    console.log('domain error', err)
})

d.run(function() {
    var port = process.env.PORT || 3000;
    //middleware, must be put before get

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,userid,username");
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
    });
    app.use(methodOverride());


    //routes
    require('./routes/index.js')(app);

    app.listen(port);
});








