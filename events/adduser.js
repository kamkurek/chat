/**
 * Created by kamil on 08.07.15.
 */
var users = require('../users');

exports.handle = function (io,socket,username) {
    socket.username = username;
    users.addUser(username);

    socket.emit('login', {
        numUsers: users.getUserCount()
    });

    socket.broadcast.emit('user joined', {
        username: socket.username,
        numUsers: users.getUserCount()
    });
};