/* ======= Main Section ======= */

function main_title(){

	$('#ui div').addClass('text');
	$('#ui .text').css('opacity', '1');
	main_image();

};

function main_image() {

	setTimeout( function() {

		$('.main-section .container .image').addClass('slideUP');
		$('.main-section .container .image').css('opacity', '1');
		main_shortdis();

	}, 2000);

};

function main_shortdis() {

	setTimeout( function() {

		$('.main-section .container .title .shortdis').css('opacity', '1');
		$('.main-section .container .title .shortdis').animate_Text();
		main_button();

	}, 3000);

};

function main_button() {

	setTimeout( function() {

		$('.main-section .container .title .button').addClass('slideRIGHT');
		$('.main-section .container .title .button').css('opacity', '1');
		main_button_flicker();

	}, 2000);

};

function main_button_flicker() {

	setTimeout( function() {

		$('.main-section .container .title .button').addClass('flicker');

	}, 1000);

};

$.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
   $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
   });
  });
 };

/* ======= About Section ======= */
$(window).scroll( function() {

    if ($('.about-section .content .back h1').hasClass('animated')) {

    	setTimeout( function() {

	    	$('.about-section .content .back .back_tit_1').removeClass('invisible');
	        $('.about-section .content .back .back_tit_1').addClass('fadeInLeft');

	        setTimeout( function() {

	        	$('.about-section .content .back .back_tit_2').addClass('fadeInRight');
	        	$('.about-section .content .back .back_tit_2').removeClass('invisible');

	        	setTimeout( function() {

		        	$('.about-section .content .back .back_tit_3').addClass('fadeInLeft');
		        	$('.about-section .content .back .back_tit_3').removeClass('invisible');

		        	if (!$('.about-section .content .back .back_tit_4').hasClass('fadeInRight')){

			        	back_shortdis();

			        }

		        	setTimeout( function() {

			        	$('.about-section .content .back .back_tit_4').addClass('fadeInRight');
			        	$('.about-section .content .back .back_tit_4').removeClass('invisible');

			        }, 200);

		        }, 200);

	    	}, 200);

	    }, 200);

    }

});

function back_shortdis() {

	setTimeout( function() {

		$('.about-section .content .back p').css('opacity', '1');
		$('.about-section .content .back p').animate_Text();

	}, 1200);

};

$(window).scroll( function() {

    if ($('.about-section .content .front .front_tit').hasClass('animated')) {

    	setTimeout( function() {

	    	$('.about-section .content .front .front_tit_1').removeClass('invisible');
	        $('.about-section .content .front .front_tit_1').addClass('fadeInLeft');

	        setTimeout( function() {

	        	$('.about-section .content .front .front_tit_2').addClass('fadeInRight');
	        	$('.about-section .content .front .front_tit_2').removeClass('invisible');

	        	setTimeout( function() {

		        	$('.about-section .content .front .front_tit_3').addClass('fadeInLeft');
		        	$('.about-section .content .front .front_tit_3').removeClass('invisible');

		        	if (!$('.about-section .content .front .front_tit_4').hasClass('fadeInRight')){

			        	front_shortdis();

			        }

		        	setTimeout( function() {

			        	$('.about-section .content .front .front_tit_4').addClass('fadeInRight');
			        	$('.about-section .content .front .front_tit_4').removeClass('invisible');

			        }, 200);

		        }, 200);

	    	}, 200);

	    }, 200);

    }

});

function front_shortdis() {

	setTimeout( function() {

		$('.about-section .content .front p').css('opacity', '1');
		$('.about-section .content .front p').animate_Text();

	}, 1200);

};

/* ======= Service Section ======= */
$(window).scroll( function() {

    if ($('.service-section .disc').hasClass('animated')) {

    	$('.service-section .disc').css('opacity', '1');
    	$('.service-section .disc').animate_Text();
    	$('.service-section .disc').removeClass('wow');
    	$('.service-section .disc').removeClass('animated');

    }

});

$(window).scroll( function() {

    if ($('.service-section .layout').hasClass('animated')) {

    	setTimeout( function() {

	    	$('.service-section .layout .images .html').removeClass('invisible');
	    	$('.service-section .layout .images .css').removeClass('invisible');
	    	$('.service-section .layout .images .js').removeClass('invisible');
	    	$('.service-section .layout .images .css').addClass('css_ani');
	    	$('.service-section .layout .images').addClass('fadein');
	    	$('.service-section .layout p').css('opacity', '1');
	    	$('.service-section .layout p').animate_Text();
	    	$('.service-section .layout').removeClass('wow');
	    	$('.service-section .layout').removeClass('animated');
	    	$('.service-section .layout p').animate_Text();

	    }, 500);

	    setTimeout( function() {

	    	$('.service-section .layout p').css('opacity', '1');

	    }, 700);

    }

});

$(window).scroll( function() {

    if ($('.service-section .wordpress').hasClass('animated')) {

    	setTimeout( function() {

	    	$('.service-section .wordpress .images img').removeClass('invisible');
	    	$('.service-section .wordpress .images img').addClass('jackInTheBox');
	    	$('.service-section .wordpress').removeClass('wow');
	    	$('.service-section .wordpress').removeClass('animated');
	    	$('.service-section .wordpress p').animate_Text();

	    }, 500);

	    setTimeout( function() {

	    	$('.service-section .wordpress p').css('opacity', '1');

	    }, 700);

    }

});

$(window).scroll( function() {

    if ($('.service-section .website').hasClass('animated')) {

    	setTimeout( function() {

	    	$('.service-section .website .images img').removeClass('invisible');
	    	$('.service-section .website .images img').addClass('rotateIn');
	    	$('.service-section .website').removeClass('wow');
	    	$('.service-section .website').removeClass('animated');
	    	$('.service-section .website p').animate_Text();

	    }, 500);

	     setTimeout( function() {

	    	$('.service-section .website p').css('opacity', '1');
	    	

	    }, 700);

    }

});

$(window).scroll( function() {

    if ($('.service-section .foot').hasClass('animated')) {

    	$('.service-section .foot').css('opacity', '1');
    	$('.service-section .foot').animate_Text();
    	$('.service-section .foot').removeClass('wow');
    	$('.service-section .foot').removeClass('animated');

    }

});
