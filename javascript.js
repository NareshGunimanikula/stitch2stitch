$(document).ready(function() {
	$("#imp h1").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus"){
			$(this).next().slideDown(300).delay(1000).fadeOut(1000);
		}
		else{
			$(this).next().slideUp(300).delay(1000).fadeIn(1000);
		}
	});
});






// $(document).ready(function() {
	// //alert("The  DOM is ready");
	// $("h1").click(function() {
		// //alert("This heading has been clicked");
		// $(this).toggleClass("hide");
		// if($(this).attr("class") != "hide") {
			// $(this).prev("div").hide();
			// $(this).text("Show More");
		// }
		// else {
			// $(this).prev("div").show();
			// $(this).text("Show Less");
		// }
	// }); //end click
// }); // end ready
