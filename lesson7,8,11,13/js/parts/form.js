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