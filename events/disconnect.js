/**
 * Created by kamil on 08.07.15.
 */
var users = require('../users');

exports.handle = function (io,socket) {
    users.removeUser(socket.username);

    socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: users.getUserCount()
    });
}