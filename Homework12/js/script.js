$(document).ready(function () {

	$(".main_btna, .main_btn, a[href='#sheldure']").click(function() {
		$('.modal').animate({
			opacity: 'toggle',
			// left: "200px", 
			top: "10%"
		}, 1000);

		$('.overlay').animate({
			opacity: 'toggle'
		}, 1500);
	});

	$('.close').click(function() {
		$('.modal').animate({
			top: '50%',
			opacity: 'toggle'
		}, 1000);

		$('.overlay').animate({
			opacity: 'toggle'
		}, 1500);

		$('#allGood').animate({
			opacity: 'toggle',
		}, 1000).remove();
			
	});

	$('form').submit(function(event) {
		event.preventDefault();

		let form = $(this);
		$.ajax({
			url: 'server.php',
			type: 'POST',
			data: form.serialize(),
		})
		.done(function() {
			console.log("success");
			$('<div>', {
				text: 'All good!',
				id: 'allGood',
				css: {
					marginTop: '20px',
					textAlign: 'center',
					fontSize: '1.3em',
				}
			}).appendTo('form');
		})
		.fail(function(jqXHR, textStatus) {
			console.log(jqXHR.statusText);
		})
		.always(function() {
			console.log("complete");
		});

		$(form).trigger('reset');
		
	});

});