/**
 * Created by kamil on 08.07.15.
 */

var usernames = {};
var numUsers = 0;

exports.addUser = function (username) {
    console.log('adduser '+username);
    usernames[username] = username;
    ++numUsers;
}

exports.removeUser = function(username)  {
    if(username) {
        console.log('removeUser '+username);
        delete usernames[username];
        --numUsers;
    }
}

exports.getUserCount = function() {
    return numUsers;
}

exports.getUserList = function() {
    return usernames;
}
