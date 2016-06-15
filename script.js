$(document).ready(function(){
  $(".staticTitle h1").show(5000);
  // $(".subscribe button").show(10000);




	$("#example p:first").css("display", "block");

	jQuery.fn.timer = function() {
		if(!$(this).children("p:last-child").is(":visible")){
			$(this).children("p:visible")
				.css("display", "none")
				.next("p").css("display", "block");
		}
		else{
			$(this).children("p:visible")
				.css("display", "none")
			.end().children("p:first")
				.css("display", "block");
		}
	} // timer function end

	window.setInterval(function() {
		$("#example").timer();
	}, 5000);



});
