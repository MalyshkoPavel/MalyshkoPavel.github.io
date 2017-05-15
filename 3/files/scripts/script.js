$(document).ready(function(){

	//Navigation
	$("#mobile-btn").click(function() {
  	$("#mobile-btn").toggleClass("mobile-btn-slide");
  	$("#list").toggleClass("mobile-list-slide")
 	});

	//Slider
  $('.bxslider').bxSlider({
  		adaptiveHeight: true,
		pager: false,
		// auto: true,
		speed: 1000,
		autoHover: true,
		pause: 6000
	});
});