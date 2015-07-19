// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;

var eventNewMessage = require('./events/newmessage');
var eventAddUser    = require('./events/adduser');
var eventDisconnect = require('./events/disconnect');
var eventTyping     = require('./events/typing');
var eventStopTyping = require('./events/stoptyping');
var eventCommand    = require('./events/command');

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Client side
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
    socket.on('new message', function (data)     { eventNewMessage.handle(io,socket,data)  });
    socket.on('add user'   , function (username) { eventAddUser.handle(io,socket,username) });
    socket.on('disconnect' , function ()         { eventDisconnect.handle(io,socket)       });
    socket.on('typing'     , function ()         { eventTyping.handle(io,socket)           });
    socket.on('stop typing', function ()         { eventStopTyping.handle(io,socket)       });
    socket.on('command'    , function (data)     { eventCommand.handle(io,socket,data)     });
});