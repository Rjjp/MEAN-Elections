var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');
var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
//temporary data store
var users = {};

module.exports = function(passport){

    //sends successful login state back to angular
    router.get('/success', function(req, res){
        res.send({state: 'success', user: req.user ? req.user : null});
    });

    //sends failure login state back to angular
    router.get('/failure', function(req, res){
        res.send({state: 'failure', user: null, message: "Invalid username or password"});
    });

    //sends failure login state back to angular
    router.get('/failureRegister', function(req, res){
        res.send({state: 'failure', user: null, message: "User already exists"});
    });

    //log in
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));

    //sign up
    router.post('/register', passport.authenticate('register', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failureRegister'
    }));

    //log out
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;

}