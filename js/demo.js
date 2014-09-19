$('.gridlinesToggle').on("click", function () {
	$('.gridlines').toggle();
});

$('.fullGridToggle').on("click", function () {
	var $grid = $('.grid');
	if(!$grid.hasClass('full')){
		$('.grid').addClass('full');
		$('.gridlines').children('row').addClass('full');
	};
});

$('.marginGridToggle').on("click", function () {
	var $grid = $('.grid');
	if($grid.hasClass('full')){
		$('.grid').removeClass('full');
		$('.inside').removeClass('full');
	};
});

$('.fixedGridToggle').on("click", function() {
	var $grid = $('.grid');
	if($grid.hasClass('zero-margin')) {
		$grid.removeClass('zero-margin');
	}
	$grid.toggleClass('fixed');
});

$('.zeroMarginToggle').on("click", function() {
	var $grid = $('.grid');
	if($grid.hasClass('fixed')) {
		$grid.removeClass('fixed');
	}
	$grid.toggleClass('zero-margin');
});

$('.headersToggle').on("click", function () {
	$('.fullGridDemo h1, .fullGridDemo h2, .fullGridDemo h3, .fullGridDemo h4').toggle();
});

$('.gridBackgroundToggle').on("click", function () {
	$('.fullGridDemo .row').toggleClass('light-gray');
	$('.extras .row').toggleClass('light-gray');
});

$(document).ready(function () {
	$('.colNum').each(function() {
		var cn = $(this).parent().attr('class')
		$(this).text(cn);
	});
});