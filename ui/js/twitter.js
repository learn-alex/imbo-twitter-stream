var Twit         = require('twit'),
    _            = require('lodash'),
    EventEmitter = require('events').EventEmitter;

function TwitterStream(options, searchTerms) {
    this.client = null;

    this.config = _.extend({
        consumer_key:         '',
        consumer_secret:      '',
        access_token:         '',
        access_token_secret:  '',
    }, options);

    this.searchTerms = searchTerms || [];

    this.initialize();
}

_.extend(TwitterStream.prototype, EventEmitter.prototype, {
    initialize: function() {
        this.client = new Twit(this.config);

        var stream = this.client.stream('statuses/filter', { track: this.searchTerms });

        stream.on('tweet', _.bind(this.tweetHandler, this));
    },

    tweetHandler: function(tweet) {
        if (tweet.entities && tweet.entities.media) {
            this.emit('mediaTweet', tweet);
        } else {
            this.emit('tweet', tweet);
        }
    }
});

module.exports = TwitterStream;