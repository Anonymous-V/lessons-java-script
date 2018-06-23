let money, name, time, price;
price = 3000;

function start() {	
	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Your money:", "");
	}
	name = prompt("Store name:", "").toUpperCase();
	time = 21;
}

start();

var mainList = {
	budjet: money,
	store_name: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; ++i) {
			let tovar = prompt("Какой тип товаров будем продавать? " + i, "");	

			if ( typeof(tovar) === "string" && typeof(tovar) != null && tovar != "" && tovar.length < 50 ) {
				console.log("All right");
				mainList.shopGoods[i] = tovar;
			} else {
				--i;
			}
		}
	},

	workTime: function workTime(time) {
		if (time < 0) {
			console.log("Такого просто не может быть");
		} else if (time > 8 && time < 20) {
			console.log("Время работать");
			mainList.open = true;
		} else if (time < 24) {
			console.log("Уже слишком поздно");
		} else {
			console.log("В сутках только 24 часа");
		}
	},

	dayBudjet: function dayBudjet() {
		alert("Budjet: " + mainList.budjet / 30);
	},

	makeDiscount: function makeDiscount(discount) {
		if (discount) {
			price *= 0.8;
			console.log(price);	
		}
	},

	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4; ++i) {
			name = prompt("Имя сотрудника " + i, "");
			mainList.employers[i] = name;
		}
	},

	chooseShopItem: function chooseShopItem() {
		let items = prompt("Перечислите через запятую товары", "");

		if (items != "" && items != null) {
			mainList.shopItems = items.split(",");
			mainList.shopItems.push( prompt("Подождите, еще", "") );
			mainList.shopItems.sort();
		} else {
			chooseShopItem();
		}
	}
}

mainList.chooseShopItem();

console.log("У нас вы можете получить:");
mainList.shopItems.forEach( function(element, index) {
	console.log(index + " : " + element);
});

console.log("Наш магазин включает в себя:");
for (let key in mainList) {
	console.log("Свойство " + key + " имеет значение " + mainList[key]);
}

console.log(mainList);



// Цикл while
/*let valExit = 5; valExitInc = 0;
while (valExit > 0) {
	let tovar = prompt("Какой тип товаров будем продавать? " + valExitInc, "");	

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
	let tovar = prompt("Какой тип товаров будем продавать? " + valExitInc, "");	

	if ( typeof(tovar) === "string" && typeof(tovar) != null && tovar != "" && tovar.length < 50 ) {
		console.log("All right");
		mainList.shopGoods[valExitInc] = tovar;
		--valExit;
		++valExitInc;
	}
} while (valExit > 0);*/