$(document).ready(function(){
	// loading
	$(window).on("load", function(){
		TweenMax.to($('.loading .txt1'), 1, {marginTop:-100, opacity:0, ease:Power3.easeOut});
		TweenMax.to($('.loading .txt2'), 1, {marginTop:0, opacity:1, delay:0.2, ease:Power3.easeOut, onComplete:function(){
			TweenMax.to($('.loading'), 1, {opacity:0, delay:0.7, ease:Power3.easeOut, onComplete:function(){
				$(".loading").remove();
				TweenMax.to($('.main_vis .vis_con .txt1'), 1.5, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($('.main_vis .vis_con .txt2'), 1.5, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($('.main_vis .vis_con .txt3'), 1.5, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut});
			}});
		}});
	});

	// to top
	$(".logo").click(function(){
		TweenMax.to($("html, body"), 0.8, {scrollTop:0, ease:Power3.easeInOut});
	});

	// main visual move
	$(".main_vis").mousemove(function(e){
		console.log(e.pageX, e.pageY);
	});


	// resize
	$(window).resize(function(){
		$(".con_wrap").css({"margin-top" : $(".main_vis").height(), "margin-bottom" : $("#footer").outerHeight(true)});
	});$(window).resize();
	

	// scroll
	$(window).scroll(function(){
		if($(window).scrollTop() > 20){
			$("#header").addClass("scrolled");
		}else{
			$("#header").removeClass("scrolled");
		}

		if($(window).scrollTop() <= $(window).height()){
			TweenMax.to($('.main_vis'), 0.3, {top:-$(window).scrollTop()/4, ease:Power3.easeOut});
		}

		if($(window).scrollTop() + $(window).height() >= $(".work_list").offset().top + $(".work_list").height()){
			$("#footer").addClass("on");
		}else{
			$("#footer").removeClass("on");
		}
	});
});