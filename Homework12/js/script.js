$(document).ready(function () {

	$(".main_btna, .main_btn, a[href='#sheldure']").click(function() {
		$('.modal').slideDown('slow');
		$('.overlay').fadeToggle('slow');
	});

	$('.close').click(function() {
		$('.modal').fadeToggle('slow');
		$('.overlay').slideUp('slow');
	});

});