let str = "урок-3-был слишком легким";
str =  str.replace('у', 'У');
str =  str.replace(/-/g, ' ');
str =  str.replace('легким', 'легко');
console.log(str);

let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;

for (let i = 0; i < arr.length; ++i) {
	if ( typeof(arr[i]) == "number" ) { 
		sum += Math.pow(arr[i], 3);
	}
}

console.log( Math.sqrt(sum) );