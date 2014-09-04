$('.gridlinesToggle').on("click", function () {
    $('.gridlines').toggle();
});

$('.fullGridToggle').on("click", function () {
	var $grid = $('.grid');
	if(!$grid.hasClass('full')){
		$('.grid').addClass('full');
		$('.inside').addClass('full');
	};
});

$('.marginGridToggle').on("click", function () {
	var $grid = $('.grid');
	if($grid.hasClass('full')){
		$('.grid').removeClass('full');
		$('.inside').removeClass('full');
	};
});