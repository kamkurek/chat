var fs = require('fs');
var memsDir = __dirname + '/../public/memy/';

var commandTest = require('./commands/test');

function getImgSrc(url) {
    return '<img src="'+url+'" height="200" width="200">';
};

exports.handle = function (io,socket,data) {
    if(data.indexOf('/test ')===0) commandTest.handle(io,socket,data);

    //var hostname = socket.handshake.headers.host;
    //var mem = '';
    //
    //if(data==='/mem list' || data==='/mem') {
    //    data = fs.readdirSync(memsDir);
    //    var memList = '';
    //    data.forEach(function(file) {
    //        if(file.indexOf('.')!=0) memList+=file+"<br>";
    //    });
    //
    //    socket.emit('new message', {
    //        username: '',
    //        message: memList
    //    });
    //    return;
    //} else if (data.indexOf('/mem ') == 0) {
    //    data = data.substr(5);
    //    if(fs.existsSync(memsDir+data+'.jpg')) {
    //        mem = 'http://'+hostname+'/memy/'+data+'.jpg';
    //    } else if(fs.existsSync(memsDir+data+'.png')) {
    //        mem = 'http://'+hostname+'/memy/'+data+'.png';
    //    } else if(fs.existsSync(memsDir+data+'.gif')) {
    //        mem = 'http://'+hostname+'/memy/'+data+'.gif';
    //    }
    //    if(mem=='') {
    //        socket.emit('new message', {
    //            username: '',
    //            message: 'takiego mema nie ma'
    //        });
    //        return;
    //    }
    //} else if (data.indexOf('/')==0) {
    //    socket.emit('new message', {
    //        username: '',
    //        message: 'eee, ni ma takiej komendy'
    //    });
    //    return;
    //}
    //
    //if(mem!='') {
    //    data = getImgSrc(mem);
    //}
    //
    //// we tell the client to execute 'new message'
    //io.sockets.emit('new message', {
    //    username: socket.username,
    //    message: data
    //});


};