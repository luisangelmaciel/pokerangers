function vibrate(type) {

	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

	if (navigator.vibrate) {
	
		if(type == 'star-wars') {
			navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]);
		} else if(type == 'mario') {
			navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);
		} else if(type == 'turtles') {
			navigator.vibrate([75,75,75,75,75,75,75,75,150,150,150,450,75,75,75,75,75,525]);
		} else if(type == 'power-rangers') {
			navigator.vibrate([150,150,150,150,75,75,150,150,150,150,450]);
		} else if(type == 'phone-call') {
			navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]);
		} else if(type == '007') {
			navigator.vibrate([200,100,200,275,425,100,200,100,200,275,425,100,75,25,75,125,75,25,75,125,100,100]);
		} else {
			navigator.vibrate(50);
		}
		
	}

}

$(document).ready(function($){

	$('.button--normal').click(function() {
		vibrate();
	});
	
	$('.button--phone-call').click(function() {
		vibrate('phone-call');
	});
	
	$('.button--power-rangers').click(function() {
		vibrate('power-rangers');
	});
	
	$('.button--mario').click(function() {
		vibrate('mario');
	});
	
	$('.button--star-wars').click(function() {
		vibrate('star-wars');
	});
	
	$('.button--turtles').click(function() {
		vibrate('turtles');
	});
	
	$('.button--bond').click(function() {
		vibrate('007');
	});

});