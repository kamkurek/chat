var app = angular.module('myApp', []);

app.controller('myCtrl',function($scope,$http) {
    $http.get('config.json').success(function(data) {
        $scope.nameQuestion = data.nameQuestion;
        $scope.placeHolder = data.placeHolder;
    });

    $scope.users = [];

    var socket = io();

    socket.on('user joined', function (data) {
        $scope.users.push({'name': data.username });
        $scope.$apply();
        //log(data.username + ' joined');
        //addParticipantsMessage(data);
    });

    // Whenever the server emits 'user left', log it in the chat body
    socket.on('user left', function (data) {
        //log(data.username + ' left');
        //addParticipantsMessage(data);
        //removeChatTyping(data);
    });
});