$(document).ready(function(){

	//Navigation

	$("#nav-btn").click(function() {
	  if ($("#nav-list").is(":hidden")) {
	    $("#nav-list").slideDown();
	  } else {
	    $("#nav-list").slideUp();
	  }
  });

	$( window ).resize(function() {
		if ($( window ).width() > "720") {
			$("#nav-list").css("display", "block");
	 	}else{
	 		$("#nav-list").css("display", "none");
	 	}
	});

	//Slider

	
	
});