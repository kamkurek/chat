var app = angular.module('myApp', []);

app.controller('myCtrl',function($scope,$http) {
    $http.get('config.json').success(function(data) {
        $scope.staticNameQuestion = data.nameQuestion;
        $scope.staticPlaceHolder = data.placeHolder;
        $scope.staticUserCountInfo = data.userCountInfo;
    });

    $scope.users = [];

    var socket = io();

    socket.on('user joined', function (data) {
        $scope.users.push({'name': data.username });
        $scope.$apply();
    });

    // Whenever the server emits 'user left', log it in the chat body
    socket.on('user left', function (data) {
        $scope.users.splice( $scope.users.indexOf({'name': data.username }), 1 );
        $scope.$apply();
    });
});