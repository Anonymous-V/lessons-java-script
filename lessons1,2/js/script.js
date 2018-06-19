var money = prompt("Your money:");
var name = prompt("Store name:");
var time = 19;

var mainList = {
	budj: money,
	store_name: name,
	shopGoods: [],
	employers: {},
	open: false
}

/*for (let i = 0; i < 5; ++i) {
	let tovar = prompt("Какой тип товаров будем продавать? " + i);	

	if ( typeof(tovar) === "string" && typeof(tovar) != null && tovar != "" && tovar.length < 50 ) {
		console.log("All right");
		mainList.shopGoods[i] = tovar;
	} else {
		--i;
	}
}*/


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


if (time < 0) {
	console.log("Такого просто не может быть");
} else if (time > 8 && time < 20) {
	console.log("Время работать");
} else if (time < 24) {
	console.log("Уже слишком поздно");
} else {
	console.log("В сутках только 24 часа");
}

console.log(mainList);

alert("Budjet: " + mainList.budj / 30);