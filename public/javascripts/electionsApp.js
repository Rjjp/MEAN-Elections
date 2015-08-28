//electionsApp.js
var app = angular.module('electionsApp', [
    'ngRoute',
    'electionsControllers'
]).run(function($rootScope, $http) {
    $rootScope.authenticated = false;
    $rootScope.current_user = '';

    $rootScope.signout = function(){
        $http.get('auth/signout');
        $rootScope.authenticated = false;
        $rootScope.current_user = '';
    };
});

app.config(function($routeProvider){
    $routeProvider

        //the timeline display
        .when('/', {
            templateUrl: 'vote.html',
            controller: 'mainController'
        })
        //the login display
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'authController'
        })
        //the signup display
        .when('/register', {
            templateUrl: 'register.html',
            controller: 'authController'
        })
        //the login display
        .when('/vote', {
            templateUrl: 'vote.html',
            controller: 'mainController'
        })
        //the login display
        .when('/test', {
            templateUrl: 'test.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/vote'
        });

});

