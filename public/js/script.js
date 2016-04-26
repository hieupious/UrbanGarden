
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
