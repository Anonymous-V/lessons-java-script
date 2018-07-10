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