/**
 * Created by kamil on 08.07.15.
 */

// when the client emits 'new message', this listens and executes
var fs = require('fs');

exports.handle = function (io,socket,data) {
    var hostname = socket.handshake.headers.host;
    var mem = '';
    if(data==='/mem list' || data==='/mem') {
        data = fs.readdirSync(__dirname + '/public/memy')
        var memList = '';
        data.forEach(function(file) {
            memList+=file+"<br>";
        });

        socket.emit('new message', {
            username: '',
            message: memList
        });
        return;
    } else if (data.indexOf('/mem ') == 0) {
        data = data.substr(5);
        if(fs.existsSync(__dirname + '/public/memy/'+data+'.jpg')) {
            mem = 'http://'+hostname+'/memy/'+data+'.jpg';
        } else if(fs.existsSync(__dirname + '/public/memy/'+data+'.png')) {
            mem = 'http://'+hostname+'/memy/'+data+'.png';
        } else if(fs.existsSync(__dirname + '/public/memy/'+data+'.gif')) {
            mem = 'http://'+hostname+'/memy/'+data+'.gif';
        }
        if(mem=='') {
            socket.emit('new message', {
                username: '',
                message: 'takiego mema nie ma'
            });
            return;
        }
    } else if (data.indexOf('/')==0) {
        socket.emit('new message', {
            username: '',
            message: 'eee, ni ma takiej komendy'
        });
        return;
    }

    if(mem!='') {
        data = getImgSrc(mem);
    }

    // we tell the client to execute 'new message'
    io.sockets.emit('new message', {
        username: socket.username,
        message: data
    });

    function getImgSrc(url) {
        return '<img src="'+url+'" height="200" width="200">';
    };
};