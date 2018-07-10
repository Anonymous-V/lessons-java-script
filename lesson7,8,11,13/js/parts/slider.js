function slider() {
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(index) {
		if (index > slides.length) {
			slideIndex = 1;
		} else if (index < 1) {
			slideIndex = slides.length;
		};


		for (let i = 0; i < slides.length; ++i) {
			slides[i].style.display = 'none';
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active'); 
	}

	function plusSlides(index) {
		showSlides(slideIndex += index);
	}

	function currentSlide(index) {
		showSlides(slideIndex = index);
	}

	prev.addEventListener('click', function () {
		plusSlides(-1);
	});

	next.addEventListener('click', function () {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function (event) {
		for (let i = 0; i < dots.length + 1; ++i) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});

	let startSlider = setInterval(function () {
		plusSlides(1);
	}, 5000);
}

module.exports = slider;