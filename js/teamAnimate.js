$(document).ready(function () {
	$('.contents').hover(
		function () {
			$('.inter').fadeIn();
		},
		function () {
			$('.inter').fadeOut();
		},
	);
});