$(document).ready(function() {

    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });
    
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 80});
    
    /* ======= ScrollTo ======= */
    $('.header .navbar-nav .nav-item .nav-link').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 600, {offset: -70, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});

    /* ======= Mobile Navigation ======= */
    $('.header .navbar .navbar-toggler').on('click', function(){
        
        if ($('#header').hasClass('mobile')) {
            $('#header').removeClass('mobile');
        }
        else {
            $('#header').addClass('mobile');
        }

    });

    $('.header .navbar-nav .nav-item .nav-link').on('click', function(){
        
        $('#my-nav').removeClass('show');
        $('#header').removeClass('mobile');
        if ($('.navbar-collapse').hasClass('in')){
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }

    });

    /* ======= Copy Email ======= */
    $('.contact-section .container .email a').on('click', function(){

        if ($('.contact-section .container .email span').hasClass('false')) {
            $('.contact-section .container .email span').text('Скопировано!');
            $('.contact-section .container .email span').css({ "top": "-30%"});
            $('.contact-section .container .email span').removeClass('false');
            $('.contact-section .container .email span').addClass('true');
        }
        else {
            $('.contact-section .container .email span').text('Нажмите, чтобы скопировать мой адрес электронной почты в буфер обмена 😀');
            $('.contact-section .container .email span').css({ "top": "-110%"});
            $('.contact-section .container .email span').removeClass('true');
            $('.contact-section .container .email span').addClass('false');
        }

    });

});