class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv() {
		let div = document.createElement('div');

		div.style.cssText = 
			`
			height: ${this.height}px;
			width: ${this.width}px;
			background-color: ${this.bg};
			font-size: ${this.fontSize}px;
			text-align: ${this.textAlign};
			padding: 10px;
			`
		div.innerHTML = "Something text";
		document.body.appendChild(div);

		return 0;
	}
}

let one = new Options(200, 200, '#FF9999', 20, 'center');
one.newDiv();

let two = new Options(100, 500, '#FF0066', 50, 'right');
two.newDiv();