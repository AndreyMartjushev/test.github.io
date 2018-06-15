$(document).ready(function(){
	//fade fix block text-page
	$(".policy .fade_in").fadeIn(1500);


	$('#fullpage').fullpage({
		anchors: ['section1','main' ],
		fadingEffect: true,
		fixedElements: '#header, .footer, #menu'
	});
	//position footer 
	var margin_container = parseInt($(".container").css("margin-left"));
	$(".footer_left").css('left', margin_container);
	$(".footer_right").css('right', margin_container);

	//fancybox video
	$().fancybox({
		selector: '[data-fancybox="gallery"]',
		open: "zoom",
		animationDuration: 1000,
		hash: false,
		transitionEffect: "slide",
		playSpeed: 2000
	});

	

	// fading footer
	var fn = function(){ 
		if ($("#section1").is(".active")) {
			$(".fade_in").fadeOut(500);
		} else {
			$(".fade_in").fadeIn(1500);
		}
		setTimeout(arguments.callee,500);
	}
	setTimeout(fn, 500);
});
//анимация стрелки апстор
var lineDrawing = anime({ 
	targets: '#lineDrawing .lines path', 
	strokeDashoffset: [anime.setDashoffset, 0], 
	easing: 'easeInOutSine', 
	duration: 1500, 
	loop: true 
}); 




