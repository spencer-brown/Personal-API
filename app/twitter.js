var Twitter = require('twitter');
var q = require('q');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var params = {screen_name: 'watthemehak'};

exports.myTweets = function(next) {
	var myTweets = cache.get('twitter.myTweets');
	if (myTweets) {
		return q.fcall(function() {
			return myTweets;
		});
	}

	client.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (!error) {
	    console.log(tweets);
  	  }
	});
}
