var express = require('express');
var app = express();

//var facebook = require('./facebook.js');
var twitter = require('./twitter');
//var github = require('./github.js');
//var medium = require('./medium.js'); 

module.exports = function(app, passport) {
    
    app.get('/api', function(req, res, next) {

        res.json({
            Name: 'Personal API',
            Description: 'A personal API for Mehak Vohra',
            Version: '1.0.0',
            Project_URL: 'http://github.com/watthemehak/Personal-API',
            Author: 'watthemehak',
            Author_Url: 'http://watthemehak.com',
        });
        
    });
    
    app.get('/api/profile', function(req, res, next) {
	 res.json({
           Name: "Mehak Vohra", 
	   Age: "19", 
	   Birthday: "July 20, 1996",
        });
    });
    
    app.get('/api/profile/education', function(req, res, next) {
       res.json({
           College: "Purdue University",
           Year: "Sophomore",
           Major: "Computer Science"
        });
    });
    
    app.get('/api/profile/employment', function(req, res, next) {
        res.json({
           Company: "Jamocha Media, LLC",
           Position: "CEO",
           Joined: "July 20, 2015"
        });
    });

    app.get('/api/social/', function(req, res, next) {
	twitter.myTweets(next).then(function(data) {
	   res.json(data);
	});
    });
};
