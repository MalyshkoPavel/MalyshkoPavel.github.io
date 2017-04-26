$(document).ready(function(){

	//Navigation
	$("#mobile-btn").click(function() {
  		$("#mobile-btn").toggleClass("mobile-btn-slide");
  		$("#list").toggleClass("mobile-list-slide")
 	});

	//Slider
  	$('.bxslider').bxSlider();
});