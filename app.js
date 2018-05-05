$(function() {

    $('a').mousemove(function(e) {

        $('.tip').css({

            'top': e.clientY + 10,
            'left': e.clientX + 10,

        }).show();

    }).mouseout(function() {

        $('.tip').hide();

    });

});