/**
 * Created by kamil on 08.07.15.
 */
exports.handle = function (io,socket) {
    socket.broadcast.emit('stop typing', {
        username: socket.username
    });
}