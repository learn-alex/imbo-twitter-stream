var $ = require('jquery');

module.exports = function() {
    $('.header a').on('click', function(e) {
        e.preventDefault();

        var id = $(e.target).attr('href');
        var target = $(id);

        target
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
};