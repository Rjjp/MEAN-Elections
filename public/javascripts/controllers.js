'use strict';

var electionsControllers = angular.module('electionsControllers', ['ngResource']);


electionsControllers.controller('mainController',  ['$scope', '$rootScope', 'voteService', function($scope, $rootScope, voteService){
    $scope.parties = ["UDC", "PDC", "PLR", "PS", "Verts", "Others"];
    $scope.results = [0,0,0,0,0,0];
    $scope.newVote = {created_by: '', vote_for: '', created_at: ''};
    $scope.username = 'World';
    $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.username + '!';
    };

//    voteService.getAll().success(function(data){
  //      $scope.votes = data;
    //});

    $scope.votes = voteService.query();
        //$scope.votes = voteService.getAll();

    $scope.vote = function() {
        $scope.votes = voteService.query();
        $scope.newVote.created_by = $rootScope.current_user;
        $scope.newVote.created_at = Date.now();
        voteService.save($scope.newVote, function(){
            $scope.votes = voteService.query();
            $scope.newVote = {created_by: '', vote_for: '', created_at: ''};
        });
    };

    $scope.vote2 = function (partie){
        var index =  $scope.parties.indexOf(partie);
        if (index == -1){
            $scope.results[$scope.parties.indexOf("Others")]++;
        }
        else {
            $scope.results[index]++;
        }
    }
}]);


app.factory('voteService', function($resource) {
    return $resource('/api/countVotes');
});
/*
app.factory('voteService', function($http){
    var factory = {};
    factory.getAll = function(){
        return $http.get('/api/countVotes');
    }

    factory.getVotes = function () {
        return $http.get('/api/countVotes').success(function(data) {
            return data;
        });
    }
    return factory;
});
*/
/*
app.factory('voteService', function($http){
    var factory = {};
    factory.getAll = function(){
        return $http.get('/api/votes');
    }
    return factory;
});
*/

electionsControllers.controller('authController',  ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location){
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    $scope.login = function(){
        $http.post('/auth/login', $scope.user).success(function(data){
            if(data.state == 'success'){
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                $location.path('/');
            }
            else{
                $scope.error_message = data.message;
            }
        });
    };

    $scope.register = function(){
        $http.post('/auth/register', $scope.user).success(function(data){
            if(data.state == 'success'){
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                $location.path('/');
            }
            else{
                $scope.error_message = data.message;
            }
        });
    };


}]);