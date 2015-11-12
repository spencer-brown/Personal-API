//var cache = require('memory-cache');
//var async = require('async');
var express = require('express');
var app = express();

//var facebook = require('./facebook');
//var twitter = require('./twitter');
//var github = require('./github');

module.exports = function(app, passport) {

    app.get('/', function(req, res, next) {

        res.render('index');
        
    });
    
    app.get('/API/info', function(req, res, next) {

        res.json({
            Name: 'Personal API',
            Description: 'A personal API for Mehak Vohra',
            Version: '1.0.0',
            Project_URL: 'http://github.com/watthemehak/Personal-API',
            Author: 'watthemehak',
            Author_Url: 'http://watthemehak.com',
        });
        
    });
    
    app.get('/mehak/profile', function(req, res, next) {

       /* facebook.getProfile(next).then(function(data) {
            res.json(data);
        });
	*/
        res.json({
            Name : "Mehak Vohra",
            Age: "19 years old",
            Location: "West Lafayette"
        });
        
    });
    
    app.get('/mehak/profile/education', function(req, res, next) {

       /* facebook.getEducation(next).then(function(data) {
            res.json(data);
        });
       */
       res.json({
           College: "Purdue University",
           Year: "Sophomore",
           Major: "Computer Science"
        });
    });
    
    app.get('/mehak/profile/employment', function(req, res, next) {

        /* facebook.getEmployment(next).then(function(data) {
            res.json(data);
        });
        */
        res.json({
           Company: "Jamocha Media, LLC",
           Position: "CEO",
           Joined: "July 20, 2015"
        });
    });
    
    /* app.get('/v0/activity/', function(req, res, next) {

        async.parallel([
            
            function(callback) {
                fitbit.getStepsSummary(next).then(function(data) {
                    callback(null, data);
                });
            },
            
            function(callback) {
                fitbit.getSleepSummary(next).then(function(data) {
                    callback(null, data);
                });
            }
            
        ], function(err, results) {
            if (err) {
                next(err);
            }
        
            res.json({
                steps: results[0],
                sleep: results[1]
            });
        });
        
    });

    app.get('/v0/activity/steps/', function(req, res, next) {

        fitbit.getSteps(next).then(function(data) {
            res.json(data);
        });
        
    });
    
    app.get('/v0/activity/sleep/', function(req, res, next) {

        fitbit.getSleep(next).then(function(data) {
            res.json(data);
        });
        
    });
    
    app.get('/v0/activity/workouts/', function(req, res, next) {

        strava.getActivities(next).then(function(data) {
            res.json(data);
        });
        
    });

    app.get('/v0/body/weight/', function(req, res, next) {

        fitbit.getWeight(next).then(function(data) {
            res.json(data);
        });
        
    });
    
    app.get('/v0/social/', function(req, res, next) {

        async.parallel([
            
            function(callback) {
                twitter.getTweetsSummary(next).then(function(data) {
                    callback(null, data);
                });
            },
            
            function(callback) {
                github.getActivitySummary(next).then(function(data) {
                    callback(null, data);
                });
            }
            
        ], function(err, results) {
            if (err) {
                next(err);
            }
        
            res.json({
                twitter: results[0],
                github: results[1]
            });
        });
        
    });
    
    app.get('/v0/social/twitter/', function(req, res, next) {

        twitter.getTweets(next).then(function(data) {
            res.json(data);
        });
        
    });
    
    app.get('/v0/social/github/', function(req, res, next) {

        github.getActivity(next).then(function(data) {
            res.json(data);
        });
        
    });
    
    app.get('/v0/blog/', function(req, res, next) {

        blog.getLatest(next).then(function(data) {
            res.json(data);
        });
        
    });
*/
    
    app.use(function(req, res, next) {
        
        res.status(404).end();

    });
    
    app.use(function(error, req, res, next) {
        
        console.error(error);

        res.status(500).end();

        next(error);

    });
    
};
