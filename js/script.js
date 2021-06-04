'use strict';

// 2 практика
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                console.log ("done");

                appData.expenses[a] = b;

            } else {
                console.log ("bad result");
                i--;
            } 
        }

    },

    detectDayBudget: function() {
        appData.moneyPerDey = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет" + appData.moneyPerDey + "руб");
    },
    detectLevel: function() {
        if(appData.moneyPerDey < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000) {
            console.log("Средний уровень достатка");
        } else if ( appData.moneyPerDey > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },

    checkSavings: function() {
         if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;  
            alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    },

    chooseOptExpense: function() {
        for (let i = 0; i < 3; i++) { 
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);     
        }    
    },

    chooseIncomme: function() {
        let items = prompt("что принесет дополнительный доход? (Перечислите через запятую", '');
        if (typeof(items) != 'string' || items =="" || typeof(items) == null) {
            console.log("неправельно введенные данные");
        } else {
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещо?'));
        appData.income.sort();
        }

        appData.income.forEdge(function (itemmassiv, i){
            alert("Способы доп. заработка" + i+1 + "-" +itemmassiv);
        });       
    }   
};
    
for (let key in appData) {
    //console.log("Наша программа включает в себя данные: " + key);
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);

}    
    


// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// };

// Используем цикл WHILE DO

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);