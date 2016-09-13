var cw = $('.post-creator').width();
var cw1 = $('.notifications').width();
var cw2 = $('.logout').width();
  $('.post-creator').css({
    'height': cw + 'px'
  });
  $('.post-creator').css('visibility', 'visible');
  $('.notifications').css({
    'top': cw + 35 + 'px',
    'height': cw1 + 'px'
  });
  $('.notifications').css('visibility', 'visible');
  $('.logout').css({
    'top': (cw1 + 35 + cw + 35) + 'px',
    'height': cw2 + 'px'
  });
  $('.logout').css('visibility', 'visible');

$(window).resize(function() {
  var cw = $('.post-creator').width();
  var cw1 = $('.notifications').width();
  var cw2 = $('.logout').width();
  $('.post-creator').css({
    'height': cw + 'px'
  });
  $('.notifications').css({
    'top': cw + 35 + 'px',
    'height': cw1 + 'px'
  });
  $('.logout').css({
    'top': (cw1 + 35 + cw + 35) + 'px',
    'height': cw2 + 'px'
  });
});

/*
var sp = $('.post-body').height();
$('.space').css({
  'margin-bottom': sp + 'px'
});*/
