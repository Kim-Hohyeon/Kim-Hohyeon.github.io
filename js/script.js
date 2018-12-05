$(document).ready(function(){
	$(window).on("load", function(){
		$(".loading").fadeOut(300, function(){
			$(this).remove();
		});
	});

	$(".logo").click(function(){
		TweenMax.to($("html, body"), 0.8, {scrollTop:0, ease:Power3.easeInOut});
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 20){
			$("#header").addClass("scrolled");
		}else{
			$("#header").removeClass("scrolled");
		}
	});
});