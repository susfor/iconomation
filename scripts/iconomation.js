// add icons


$('.playspace').append('<i class="em em-two_men_holding_hands"></i>');

$('.playspace').append('<i class="em em-woman"></i>');
$('.playspace').append('<i class="em em-older_woman"></i>');
$('.playspace').append('<i class="em em-man"></i>');
$('.playspace').append('<i class="em em-older_man"></i>');
$('.playspace').append('<i class="em em-person_with_blond_hair"></i>');

$('.playspace').append('<i class="em em-thumbsup"></i>');

// set the initial positions

$('.em-two_men_holding_hands').css({
  top: 100,
  left: 300
});

$('.em-woman').css({
  top: 300,
  left: 200
});
$('.em-older_woman').css({
  top: 300,
  left: 250
});
$('.em-man').css({
  top: 300,
  left: 300
});
$('.em-older_man').css({
  top: 300,
  left: 350
});
$('.em-person_with_blond_hair').css({
  top: 300,
  left: 400,
});

$('.em-thumbsup').css("visibility", "hidden");

// vote!

$('.em-two_men_holding_hands').animate({
  top: 70
}, 1000);


var myArray = [];

myArray[0]=2000;
myArray[1]=3000;
myArray[2]=3000;
myArray[3]=4000;
myArray[4]=5000;
for(var k=0;k<5;k++){

   if(k==0){
	   setTimeout(function() {
	      $('.em-older_woman, .em-man, .em-person_with_blond_hair').animate({
	    	top: 150
	  	  }, 800, 'easeOutQuart');
	  	 },myArray[0]);
	}
	else if (k==1){
	   setTimeout(function() {
	      //$('.em-thumbsup').css("visibility","visible");
	      $('.em-thumbsup').css({
 			 top: 30,
 			 visibility: "visible",
 			 transform: "scale(2,2)"

		  });
	  	 },myArray[1]);	
	}
}



