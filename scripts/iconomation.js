// add icons
$('.playspace').append('<i class="em em-rooster"></i>');
$('.playspace').append('<i class="fa fa-futbol-o"></i>');


// set the initial positions

$('.em-rooster').css({
  top: 200,
  left: 300
});

$('.fa-futbol-o').css({
  top: 210,
  left: 100
});


// play!

$('.em-rooster').animate({
  left: 50
}, 1000);

$('.fa-futbol-o').delay(660).animate({
  left: 0
}, 800, 'easeOutQuart');
