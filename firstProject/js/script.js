var budjet = prompt("Your budjet:");
var store = prompt("Store name:");

var mainList = {
	budj: budjet,
	store_name: store,
	shopGoods: [],
	employers: {
		firstEmployer: "John",
		secondEmployer: "Smith"
	},
	open: true
}

var questionOne = prompt("Какой тип товаров будем продавать? (one)");
var questionTwo = prompt("Какой тип товаров будем продавать? (two)");
var questionThree = prompt("Какой тип товаров будем продавать? (three)");

mainList.shopGoods[0] = questionOne;
mainList.shopGoods[1] = questionTwo;
mainList.shopGoods[2] = questionThree;

console.log(mainList.shopGoods[1]);

alert("Budjet: " + mainList.budj / 30);