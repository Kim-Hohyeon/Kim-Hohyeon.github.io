$(document).ready(function(){
	// loading
	$(window).on("load", function(){
		TweenMax.to($('.loading .txt1'), 1, {marginTop:-100, opacity:0, ease:Power3.easeOut});
		TweenMax.to($('.loading .txt2'), 1, {marginTop:0, opacity:1, delay:0.2, ease:Power3.easeOut, onComplete:function(){
			TweenMax.to($('.loading'), 1, {opacity:0, delay:0.7, ease:Power3.easeOut, onComplete:function(){
				$(".loading").remove();
				TweenMax.to($('#header'), 1.5, {top:0, opacity:1, ease:Power3.easeOut});
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

	// menu click
	$("#header .menu a").each(function(i){
		$(this).click(function(){
			if(i == 3){
				TweenMax.to($("html, body"), 0.8, {scrollTop:$("#wrap").height(), ease:Power3.easeInOut});
			}else{
				TweenMax.to($("html, body"), 0.8, {scrollTop:$(".main_tit").eq(i).offset().top - 80, ease:Power3.easeInOut});
			}
		});
	});

	// main visual move
	var visX, visY;
	$(window).mousemove(function(e){
		if($(window).scrollTop() < window.innerHeight){
			visX = (window.innerWidth/2 - e.pageX) / 10;
			visY = (window.innerHeight/2 - e.pageY) / 10;
			
			TweenMax.to($('.main_vis .vis_bg'), 1, {marginTop:-visY, marginLeft:-visX, ease:Power3.easeOut});
			TweenMax.to($('.main_vis .vis_con'), 1, {marginTop:visY, marginLeft:visX, ease:Power3.easeOut});
		}
	});


	// resize
	$(window).resize(function(){
		$(".con_wrap").css({"margin-top" : $("body").height(), "margin-bottom" : $("#footer").outerHeight(true)});
	});$(window).resize();
	

	// scroll
	$(window).scroll(function(){
		if($(window).scrollTop() > 20){
			$("#header").addClass("scrolled");
		}else{
			$("#header").removeClass("scrolled");
		}

		if($(window).scrollTop() <= $(window).height()){
			$('.main_vis').css("z-index", 1);
			$('#footer').css("z-index", 0);
			TweenMax.to($('.main_vis'), 0.3, {top:-$(window).scrollTop()/2, ease:Power3.easeOut});
		}else{
			$('.main_vis').css("z-index", 0);
			$('#footer').css("z-index", 1);
		}
	});
});