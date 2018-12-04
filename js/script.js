$(document).ready(function(){
	$(window).on("load", function(){
		$(".loading").fadeOut(500, function(){
			$(this).remove();
		});
	});

	$(".logo").click(function(){
		TweenMax.to($("html, body"), 0.8, {scrollTop:0, ease:Power3.easeInOut});
	});
});