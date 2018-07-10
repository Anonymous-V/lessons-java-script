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