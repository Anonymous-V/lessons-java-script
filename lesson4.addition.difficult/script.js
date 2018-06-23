let arr = [];

function addArray(num) {
	for (let i = 0; i < num; ++i) {
		arr.push( [] );
	}
}

let num = parseInt( prompt("Сколько использовать массивов", 1) );
addArray(num);

console.log(arr);

function addNumbersInArray() {
	for (let i = 0; i < num; ++i) {

		let cnt = Math.round( (Math.random() * 100) % 4 + 1 )
		console.log("Добавление элементов в массив " + i);
		let sum = 0;

		for (let j = 0; j < cnt; ++j) {
			arr[i][j] = Math.round( Math.random() * 100 );
			sum += arr[i][j];
		}
		console.log("Сумма элементов в массиве: " + sum);
	}
		
}

addNumbersInArray();

console.log(arr);