(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", () => {


	let tab = require('../parts/tab.js');
	let timer = require('../parts/timer.js');
	let modal = require('../parts/modal.js');
	let slider = require('../parts/slider.js');
	// let ajax = require('../parts/ajax.js');
	let form = require('../parts/form.js');
	let menu = require('../parts/menu.js');
	let calc = require('../parts/calc.js');

	tab();
	modal();
	timer();
	slider();
	// ajax();
	menu();
	calc();
	form();
	
	// Timer

	
	// Menu transition

	


	// Modal window

	


	// Form

	

		// AJAX
		
	// }


	// Slider

	


	// Calculator

	

});
},{"../parts/calc.js":2,"../parts/form.js":3,"../parts/menu.js":4,"../parts/modal.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDay = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function () {
		personsSum = this.value;
		total = ( parseInt(daysSum, 10) + parseInt(personsSum, 10) ) * 4000;

		if ( isNaN(parseInt(restDay.value, 10)) || isNaN(parseInt(persons.value, 10)) ) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	restDay.addEventListener('change', function () {
		daysSum = this.value;
		total = ( parseInt(daysSum, 10) + parseInt(personsSum, 10) ) * 4000;


		if ( isNaN(parseInt(persons.value, 10))  ||  isNaN(parseInt(restDay.value, 10))) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('change', function () {
		let rest = restDay.value;
		let pers = persons.value;

		if ( isNaN(parseInt(rest, 10)) || isNaN(parseInt(pers, 10)) ) {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});
}

module.exports = calc;
},{}],3:[function(require,module,exports){
function form() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = 'Спасибо! Скоро мы свяжемся с Вами';
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
		formContact = document.getElementById('form'),
		input = form.getElementsByTagName('input'),
		inputContact = formContact.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	form.addEventListener('submit', callForm);
	formContact.addEventListener('submit', callForm);

	function callForm(event) {
		event.preventDefault();

		let formName, inp;
		if (event.target === formContact) {
			formName = formContact;
			inp = inputContact;
		} else if (event.target === form) {
			formName = form;
			inp = input;
		}

		formName.appendChild(statusMessage);


		let request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(formName);

			request.send(formData);

			request.onreadystatechange = function () {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				}	else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Добавляем контент на страницу
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}

			for (let i = 0; i < inp.length; ++i) {
				inp[i].value = '';
			}
		}
}

module.exports = form;
},{}],4:[function(require,module,exports){
function menu() {
	let menu_ul = document.getElementsByTagName('ul')[0],
		anchors = document.querySelectorAll('nav > ul > li'),
		arrAnchors = [];


	for (let i = 0; i < anchors.length; ++i) {
		arrAnchors[i] = anchors[i].children[0].hash.replace('#', '');
	}

	menu_ul.addEventListener('click', (event) => {
		if (event.target && event.target.tagName == "A") {

			event.preventDefault();
			eventAnchor = event.originalTarget.attributes.href.value.replace('#', '');
			let dist;
			for (let i = 0; i < arrAnchors.length; ++i) {
				if (eventAnchor == arrAnchors[i]) {
					dist = document.getElementById(arrAnchors[i]).getBoundingClientRect().top;
				}
			}
		
			function step() {
				if (dist < 0) {
					dist += 10;
					window.scrollBy(0, -10);
					if (dist > 0) {
						clearInterval(timeInt);
					}
				} else if (dist >= 0) {
					dist -= 10;
					window.scrollBy(0, 10);
					if (dist < 0) {
						clearInterval(timeInt);
					}
				}
			}

			let timeInt = setInterval(step, 1);

			step();
		}
	});
}

module.exports = menu;
},{}],5:[function(require,module,exports){
function modal() {
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		description_btn = document.querySelectorAll('.description-btn');

	function showModalWindow() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	for (let i = 0; i < description_btn.length; ++i) {
		description_btn[i].addEventListener('click', showModalWindow)
	}

	more.addEventListener('click', showModalWindow);

	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
}

module.exports = modal;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName("info-header-tab"),
		tabContent = document.getElementsByClassName("info-tabcontent"),
		info = document.getElementsByClassName("info-header")[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; ++i) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains("hide")) {
			hideTabContent(0);
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == "info-header-tab") {
			for (let i = 0; i < tab.length; ++i) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;
},{}],8:[function(require,module,exports){
function timer() {
	let deadline = "2018-07-28";
	
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t / 1000) % 60 );
			minutes = Math.floor( (t / (1000 * 60) ) % 60 ),
			hours = Math.floor( (t / (1000 * 60 * 60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {

				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				if (t.hours < 10) {
					hours.innerHTML = '0' + t.hours;
				}

				minutes.innerHTML = t.minutes;
				if (t.minutes < 10) {
					minutes.innerHTML = '0' + t.minutes;
				}

				seconds.innerHTML = t.seconds;
				if (t.seconds < 10) {
					seconds.innerHTML = '0' + t.seconds;
				}

				if (t.total <= 0) {
					hours.innerHTML = "00";
					minutes.innerHTML = "00";
					seconds.innerHTML = "00";
					clearInterval(timeInterval);
				}
				
			};

			updateClock();

			let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
