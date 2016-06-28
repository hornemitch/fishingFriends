	$("#thumbs a").click( function() {
		var changeSrc = $(this).attr("href");
		$("#target").attr("src", changeSrc);
		$('html,body').animate({
			scrollTop: $('#trg').offset().top}
			, 650);
		return false;
	});

var mainpic = $('#myMainPic');
var bottom = mainpic.offset().top + mainpic.height();
var nav = $('#nav');

	$(window).on('scroll' ,function(){
		stop = Math.round($(window).scrollTop());	
		    if (stop > bottom){
		        nav.addClass('navbargather');
		        nav.removeClass('navbar');
		    } else {
		        nav.addClass('navbar');
		        nav.removeClass('navbargather');
		    }
	}); 