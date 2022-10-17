
$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY > 500){
			$('scroll-up-btn').addClass("show");

		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});


	// slide-up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});
	// toggle menu/navbar 
	$('.scroll-up-btn').click(function(){
		$('navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
	// typing animeted 
	var typed = new typed(".typing",{
		strings:[DataScientist, Writer, Billionaire];
		typeSpeed:100,
		backSpeed:60,
		loop:true
	});
	var typed = new typed(".typing-2",{
		strings:[DataScientist, Writer, Billionaire];
		typeSpeed:100,
		backSpeed:60,
		loop:true
	});

	// owl carousel 
	$('.carousel').owlCarousel({

	});

	
});