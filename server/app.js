var express = require('express');
var mongoose = require('mongoose')


// mongoose.connect()


var app = express();
var server = require('http').createServer(app)

require('./routes')(app);

server.listen(9000, function () {
    console.log('Express server listening on %d, in %s mode', 9000, app.get('env'));
});
