$(document).ready(function(){

	//Navigation

	$("#nav-btn").click(function() {
	  $("#nav-list").slideToggle(500);
	  $("#nav-btn").toggleClass("nav-slide");
  });

	$( window ).resize(function() {
		if ($( document ).width() > "720") {
			$("#nav-list").css("display", "block");
	 	}else{
	 		$("#nav-list").css("display", "none");
	 	}
	});

	//Slider

	
	
});