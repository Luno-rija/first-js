"use strict";

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt('Введите дату в формате YYYY-MM-DD', "");


let appDate = {
        budget: money,
        timeData: time,
        expensed: {},
        optionalExpenses: {},
        income: [],
        saving: false
};

console.log(appDate);

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

console.log(a1 = a2);
console.log(a3 = a4);



alert(money / 30);

alert("Бюджет на один день 2000р ");