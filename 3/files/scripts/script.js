$(document).ready(function(){

	//Navigation

	$("#nav-btn").click(function() {
	  $("#nav-list").slideToggle(500);
	  $("#nav-btn").toggleClass("nav-slide");
  });

	$(window).resize(function() {
		if ($(window).width() > "715") {
			$("#nav-list").css("display", "block");
	 	}else{
	 		$("#nav-btn").removeClass("nav-slide");
	 		$("#nav-list").css("display", "none");
	 	}
	});

	//Slider

	
	
});