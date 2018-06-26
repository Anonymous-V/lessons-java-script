let open = document.getElementById("open-btn"),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budjet_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');


let money,
	name,
	time,
	price;

open.addEventListener('click', () => {
	setTimeout(start, 2000);	
});

function start() {
	money = prompt("Ваш бюджет?", "");

	while ( isNaN(money) || money == "" || money == null ) {
		money = prompt("Ваш бюджет?", "");
	}
	budget_value.textContent = money;
	mainList.budjet = money;

	name_value.textContent = prompt("Название вашего магазина?", "").toUpperCase();

	discount_value.textContent = money * .8;
}

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; ++i) {
		let a = goods_item[i].value;

		if ( typeof(a) == 'string' && typeof(a) != null && a.length < 50) {
			console.log("Все верно");
			mainList.shopGoods[i] = a;
		} else {
			--i;
		}
		goods_value.textContent = mainList.shopGoods;
	}
});

choose_item.addEventListener("change", () => {
	let items = choose_item.value;

	if ( isNaN(items) && items != '' ) {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();

		items_value.textContent = mainList.shopItems;
	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time >= 8 && time <= 20) {
		mainList.open_store = true;
	} else {
		mainList.open_store = false;
	}

	if (mainList.open_store) {
		isopen_value.style.backgroundColor = 'green';
	} else {
		isopen_value.style.backgroundColor = 'red';
	}
});

budget_btn.addEventListener('click', () => {
	count_budjet_value.value = mainList.budjet / 30;
});

employers_btn.addEventListener('click', () => {
	for (let i = 0; i < hire_employers_item.length; ++i) {
		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;

		employers_value.textContent += mainList.employers[i] + ", ";
	}
});


const mainList = {
	budjet: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open_store: false,
	discount: false,
	shopItems: [],
}

