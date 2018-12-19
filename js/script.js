$(document).ready(function(){
	$(window).on("load", function(){
		$(".loading").fadeOut(300, function(){
			$(this).remove();
		});
	});

	$(".logo").click(function(){
		TweenMax.to($("html, body"), 0.8, {scrollTop:0, ease:Power3.easeInOut});
	});


	// resize
	$(window).resize(function(){
		$(".conWrap").css({"margin-top" : $(".mainVis").height(), "margin-bottom" : $("#footer").outerHeight(true)});
	});$(window).resize();
	

	// scroll
	$(window).scroll(function(){
		if($(window).scrollTop() > 20){
			$("#header").addClass("scrolled");
		}else{
			$("#header").removeClass("scrolled");
		}

		if($(window).scrollTop() <= $(window).height()){
			TweenMax.to($('.mainVis'), 0.3, {top:-$(window).scrollTop()/4, ease:Power3.easeOut});
		}

		if($(window).scrollTop() + $(window).height() >= $(".workList").offset().top + $(".workList").height()){
			$("#footer").addClass("on");
		}else{
			$("#footer").removeClass("on");
		}
	});
});