// Поменять местами пункты меню
let liOne = document.getElementsByClassName("menu-item")[1];
let liTwo = document.getElementsByClassName("menu-item")[2];

liOne.parentNode.insertBefore(liTwo, liOne);

// Изменить фоновое изображение
document.body.style.backgroundImage = "url(img/apple_true.jpg)";

// Изменить текст
let title = document.getElementById("title");
title.innerHTML = title.textContent.replace("только", "только подлинную");

// Удалить рекламный блок
let adv = document.getElementsByClassName("adv");
adv[0].parentNode.removeChild(adv[0]);

// Ответ пользователя о технике Apple
let answer = prompt("Какое у Вас отношение к технике Apple?", "");
let elem = document.getElementById("prompt");
elem.innerHTML = answer;