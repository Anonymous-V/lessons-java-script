var num = 33721;
var res = num % 10;
num = Math.floor(num / 10);

while (num > 0) {
	res *= num % 10;
	num = Math.floor(num / 10);
}	

console.log(res);
console.log( Math.pow(res, 3) );