let getButton = document.getElementById("open-btn");

let getLeftField = document.getElementsByClassName("main-info");

let arr = [];
for (let i = 0; i < getLeftField[0].childNodes.length; ++i) {
	arr[i] = getLeftField[0].childNodes[i];
}

let getCategoryGoods = document.getElementsByClassName("goods-item");

let getThreeButton = document.getElementsByTagName("button");

let getEnterFieldGoodsOne = document.querySelector("#items");
let getEnterFieldGoodsTwo = document.querySelector("#time");
let getEnterFieldGoodsThree = document.querySelector("#budget");

let getAllEmployers = document.querySelectorAll(".hire-employers-item");