var cw = $('.post-creator').width();
var cw1 = $('.notifications').width();
var button = $('.notifications');

$('.notifications-window').css({
  'top': cw + 15 + 'px'
});


$(window).resize(function() {
  var cw = $('.post-creator').width();
  var cw1 = $('.notifications').width();
  $('.notifications-window').css({
    'top': cw + 15 + 'px'
  });
});

button.click(function() {
  var test = $(".notifications-window").css('visibility') === 'hidden';
  if (!test) {
    $('.note-msg').css('visibility', 'hidden');
    $('.notifications-window').css('visibility', 'hidden');
    button.css('opacity', '0.75');
  }
  else {
    $('.note-msg').css('visibility', 'visible');
    $('.notifications-window').css('visibility', 'visible');
    button.css('opacity', '1');
  }
})