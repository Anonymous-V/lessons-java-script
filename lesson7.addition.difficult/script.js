let rect = document.querySelector(".box"),
	btn = document.querySelector(".btn");

function animate(draw, duration) {
	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timePassed = time - start;
		
		if (timePassed > duration) {
			timePassed = duration;
		}

		draw(timePassed);

		if (timePassed < duration) {
			requestAnimationFrame(animate);
		}
	});
}


btn.addEventListener('click', function () {
	animate(function (timePassed) {
		rect.style.left = timePassed / 5 + 'px';
	}, 2000)
})