//electionsApp.js
var app = angular.module('electionsApp', [
    'ngRoute',
    'electionsControllers'
]);

app.config(function($routeProvider){
    $routeProvider

        //the timeline display
        .when('/', {
            templateUrl: 'vote.html',
            controller: 'mainController'
        })
        //the login display
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'authController'
        })
        //the signup display
        .when('/register', {
            templateUrl: 'partials/register.html',
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

