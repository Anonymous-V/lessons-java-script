let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var date = new Date();
var day = date.getDay() - 1;
if (day == -1) {
	day = 6;
}

for (let i = 0; i < week.length; ++i) {
	var newElem = document.createElement("span");
	newElem.className = "myClass";
	var textInElem = document.createTextNode(week[i]);

	if (week[i] == "Saturday" || week[i] == "Sunday") {
		newElem.className += " bold";
	}

	if (i == day) {
		newElem.className += " italic";
	}

	newElem.appendChild(textInElem);
	document.body.appendChild(newElem);

}

let arr = ["3456145946", "148943456", "76123462436", "555646178913", 
			"394165412647234123", "774464147324234231464263", "888888888888888"];

for (let i = 0; i < arr.length; ++i) {
	if (arr[i][0] == "3" || arr[i][0] == "7") {
		console.log(arr[i]);
	}
}