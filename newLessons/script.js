let box = document.getElementById("box"),
	btn = document.getElementsByTagName("button"),
	circle = document.getElementsByClassName("circle"),
	heart = document.querySelectorAll(".heart"),
	oneHeart = document.querySelector(".heart");

btn[1].style.borderRadius = "100%";

let div = document.createElement("div");
let text = document.createTextNode("Тут был я");

div.classList.add("black");
div.style.backgroundColor = "black";
div.style.padding = '5px';
div.style.display = 'inline-block';
div.style.color = 'white';
document.body.appendChild(div);
document.body.insertBefore(div, btn[1]);
document.body.removeChild(btn[4]);
document.body.replaceChild(div, btn[3]);

div.innerHTML = "Hello, World";