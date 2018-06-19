let money, name, time, price;
price = 3000;

function start() {	
	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Your money:");
	}
	name = prompt("Store name:").toUpperCase();
	time = 21;
}

start();

var mainList = {
	budjet: money,
	store_name: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
}

function chooseGoods() {
	for (let i = 0; i < 5; ++i) {
		let tovar = prompt("Какой тип товаров будем продавать? " + i);	

		if ( typeof(tovar) === "string" && typeof(tovar) != null && tovar != "" && tovar.length < 50 ) {
			console.log("All right");
			mainList.shopGoods[i] = tovar;
		} else {
			--i;
		}
	}
}

chooseGoods();


// Цикл while
/*let valExit = 5; valExitInc = 0;
while (valExit > 0) {
	let tovar = prompt("Какой тип товаров будем продавать? " + valExitInc);	

	if ( typeof(tovar) === "string" && typeof(tovar) != null && tovar != "" && tovar.length < 50 ) {
		console.log("All right");
		mainList.shopGoods[valExitInc] = tovar;
		--valExit;
		++valExitInc;
	} 
}*/


// Цикл do while
/*let valExit = 5; valExitInc = 0;
do {
	let tovar = prompt("Какой тип товаров будем продавать? " + valExitInc);	

	if ( typeof(tovar) === "string" && typeof(tovar) != null && tovar != "" && tovar.length < 50 ) {
		console.log("All right");
		mainList.shopGoods[valExitInc] = tovar;
		--valExit;
		++valExitInc;
	}
} while (valExit > 0);*/

function workTime(time) {
	if (time < 0) {
		console.log("Такого просто не может быть");
	} else if (time > 8 && time < 20) {
		console.log("Время работать");
	} else if (time < 24) {
		console.log("Уже слишком поздно");
	} else {
		console.log("В сутках только 24 часа");
	}
}

console.log(mainList);

function calcBudjet() {
	alert("Budjet: " + mainList.budjet / 30);
}

calcBudjet();

function calcDiscount(discount) {
	if (discount) {
		price *= 0.8;
		console.log(price);	
	}
}

calcDiscount(mainList.discount);


function addEmployers() {
	for (let i = 0; i < 4; ++i) {
		name = prompt("Имя сотрудника " + i);
		mainList.employers[i] = name;
	}
}

addEmployers();
