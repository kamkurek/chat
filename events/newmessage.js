exports.handle = function (io,socket,data) {
    // we tell the client to execute 'new message'
    io.sockets.emit('new message', {
        username : socket.username,
        message  : data
    });
};