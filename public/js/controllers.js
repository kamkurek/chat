var app = angular.module('myApp', []);

app.controller('myCtrl',function($scope,$http) {    
    this.users = users;
    this.messages = messages;

    $http.get('config.json').success(function(data) {
        $scope.staticNameQuestion = data.nameQuestion;
        $scope.staticPlaceHolder = data.placeHolder;
        $scope.staticUserCountInfo = data.userCountInfo;
    });    

    var socket = io();

    socket.on('user joined', function (data) {
        users.push({'name': data.username });
        $scope.$apply();
    });

    socket.on('user left', function (data) {
        users.splice( $scope.users.indexOf({'name': data.username }), 1 );
        $scope.$apply();
    });

    socket.on('new message', function (data) {    
        messages.push(data);
        $scope.$apply();
    });

    socket.on('login', function (data) {
        connected = true;
    });
});

var messages = [];
var users = [];