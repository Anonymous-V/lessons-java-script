function ajax() {
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

module.exports = ajax;