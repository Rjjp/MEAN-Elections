/* Controllers */

var electionsControllers = angular.module('electionsControllers', []);


electionsControllers.controller('mainController',  ['$scope', function($scope){
    $scope.parties = ["UDC", "PDC", "PLR", "PS", "Verts", "Others"];
    $scope.results = [0,0,0,0,0,0];
    $scope.newVote = {voteFor: ''};
    $scope.username = 'World';
    $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.username + '!';
    };
    $scope.vote = function (partie){
        var index =  $scope.parties.indexOf(partie);
        if (index == -1){
            $scope.results[$scope.parties.indexOf("Others")]++;
        }
        else {
            $scope.results[index]++;
        }
    }
}]);


electionsControllers.controller('authController',  ['$scope', function($scope){
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    $scope.login = function(){
        //placeholder until authentication is implemented
        $scope.error_message = 'login request for ' + $scope.user.username;
    };

    $scope.register = function(){
        //placeholder until authentication is implemented
        $scope.error_message = 'registration request for ' + $scope.user.username;
    };
}]);