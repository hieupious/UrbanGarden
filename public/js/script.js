
$(window).load(function() {
	//Preloader
	$('#status').delay(300).fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});

})

// GET TRANSLATE VALUE
// $(document).ready(function(){
// 	function $m(id){
// 	   return document.getElementById(id);
// 	}
//     $("#homepage_wrapper").scroll(function(){
//         function getTransform(el) {
// 				var transform = window.getComputedStyle(el, null).getPropertyValue('transform');
// 				var results = transform.match(/matrix(?:(3d)\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))(?:, (-{0,1}\d+)), -{0,1}\d+\)|\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))\))/);

// 				if(!results) return [0, 0, 0];
// 				if(results[2] == '3d') return results.slice(2,5);

// 				results.push(0);
// 				return results.slice(6, 8); // returns the [X,Y,Z,1] values
// 			}


// 			var translation = getTransform( $m('#homepage_wrapper') );
// 			var translationY = translation[0];
// 			var absX = Math.abs(translationY);

// 			alert(absX);
//     });
// });

$(document).ready(function() {
	function sliderPanelSize() {
		$( ".fp-slidesNav li a span" ).css({
				"height": $(window).height(),
				"width": $(window).height()
			});
	}
	$(window).on("load", sliderPanelSize);
	$(window).on("resize", sliderPanelSize);

	// Fullpage
	$('#homepage_wrapper').fullpage({
		anchors: ['main', 'our-products', 'outlet-store', 'showroom', 'premier', 'stories'],
		navigation: true,
		navigationPosition: 'right',
		scrollOverflow: true,
		slidesNavigation: true,
		slidesNavPosition: "right",
		controlArrows: true,
		afterRender: function () {
	        //on page load, start the slideshow
	         slideTimeout = setInterval(function () {
	                $.fn.fullpage.moveSlideRight();
	            }, 8000);
	    },
	    onLeave: function (index, direction) {
	        //after leaving section 1 (home) and going anywhere else, whether scrolling down to next section or clicking a nav link, this SHOULD stop the slideshow and allow you to navigate the site...but it does not
	        if (index == '3') {
	            console.log('on leaving the slideshow/section3');
	            clearInterval(slideTimeout);
	        }
	   },
		afterLoad: function(anchorLink, index){
				if(index == 3){
					$('.fadeInDown').addClass('animated');
				}
				if(index == 4){
					$('.fadeInUp').addClass('animated');
				}
				if(index == 5){
					$('.bounceInUp').addClass('animated');
				}
				if(index == 6){
					$('.fadeInUp , .fadeInDown').addClass('animated');
				}
			}
	});

	//animated logo
	$(".navbar-brand").hover(function () {
		$(this).toggleClass("animated shake");
	});


	//SmothScroll
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
						var targetOffset = $target.offset().top;
						$('html,body').animate({scrollTop: targetOffset}, 600);
						return false;
				}
		}
	});
});
