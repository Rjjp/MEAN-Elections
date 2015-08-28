var express = require('express');
var router = express.Router();

var mongoose = require( 'mongoose' );
var Vote = mongoose.model('Vote');

//Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods
    if(req.method === "GET"){
        return next();
    }

    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    return res.redirect('/#login');
};

//Register the authentication middleware
router.use('/votes', isAuthenticated);

//api for all posts
router.route('/votes')

    //create a new post
    .post(function(req, res){

        //TODO create a new post in the database
        var vote = new Vote();
        vote.vote_for = req.body.vote_for;
        vote.last_elections = req.body.last_elections;
        vote.created_by = req.body.created_by;
        vote.save(function(err, vote) {
            if (err) {
                return res.send(500, err);
            }
            return res.json(vote);
        });
    })

    .get(function(req, res){

       Vote.find(function(err, votes){
           if (err){
               return res(500, err);
           }
           return res.send(votes);
       });
    });

//api for count Votes
router.route('/countVotes')

    .get(function(req, res) {

        Vote.aggregate(
            [{$group: {_id: "$vote_for", total: {$sum: 1}}},
                { $sort: { total: -1 } }],

            function (err, vote) {
                if (err)
                    res.send(err);
                res.json(vote);
            })
    })

        //create a new post
        .post(function(req, res){

            //TODO create a new post in the database
            var vote = new Vote();
            vote.vote_for = req.body.vote_for;
            vote.last_elections = req.body.last_elections;
            vote.created_by = req.body.created_by;
            vote.save(function(err, vote) {
                if (err) {
                    return res.send(500, err);
                }
                return res.json(vote);
            });
        });


//api for a specfic post
router.route('/votes/:id')

    //create
    .put(function(req,res){
        Vote.findOne({ _id: id }, function(err, vote){
            if(err)
                res.send(err);

            post.created_by = req.body.created_by;
            post.vote_for = req.body.vote_for;

            post.save(function(err, vote){
                if(err)
                    res.send(err);

                res.json(vote);
            });
        });
    })

    .get(function(req,res){
        Vote.findById(req.params.id, function(err, vote){
            if(err)
                res.send(err);
            res.json(vote);
        });
    })

    .delete(function(req,res){
        Vote.remove({
            _id: req.params.id
        }, function(err) {
            if (err)
                res.send(err);
            res.json("deleted :(");
        });
    });

module.exports = router;