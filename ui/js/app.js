require('nw.gui').Window.get().showDevTools();
require('app/navigation')();

require('nw.gui').Window.get().showDevTools();

var Imbo = require('imboclient');

var TwitterStream = require('app/twitter');

var stream = new TwitterStream({
    consumer_key:         '...A',
    consumer_secret:      '...36baIIIil1vV4q5ikadXY35vnK',
    access_token:         '...sUMzc0sWl83rshpeBwej8XlmH5',
    access_token_secret:  '...E6xSX3fmJhSYnbjCHXHl9'
}, ['rexxars', 'cat']);

stream.on('mediaTweet', function(tweet) {
    //console.log(tweet.entities.media);
});