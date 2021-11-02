$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(function() {
	$(window).on("scroll", function() {
		 if($(window).scrollTop() > 50) {
			  $(".header").addClass("changeBgc");
			  $(".header").removeClass("marginHeader");
		 } else {
			  //remove the background property so it comes transparent again (defined in your css)
			 $(".header").removeClass("changeBgc");
			 $(".header").addClass("marginHeader");
		 }
	});
});