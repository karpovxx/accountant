'use strict'

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {    /*  Возвращает пользователя на ту же строку, если он указал не цифры */
        money = +prompt('Ваш бюджет на месяц?', '');
    };
};
start(); /*    Вызов функции Start */

/* let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD'); */
let appData = {
	budget: money,
	timeData: time,
	MandatoryExpenses: {},
	nonMandatoryExpenses: {},
	income: [],
	savings: true,
}

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
			b = prompt('Во сколько обойдется?', '')
		if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 20) {
			console.log('yes');
			appData.MandatoryExpenses[a] = b;
		} else {
			console.log('bad result')
			i--;
		};
	};
};

chooseExpenses();   /* Вызов функции chooseExpenses */
/* let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдется?', ''), */
  
/* appData.MandatoryExpenses.a1 = a2;
appData.nonMandatoryExpenses.a3 = a4; */

 
appData.MonyPerDay = (appData.budget / 30).toFixed();    /*  .toFixed округляет число до того знака, который указан в скобках (Оно возвращает строковок значение переменной)*/

alert((appData.budget / 30).toFixed());

if (appData.MonyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if ( appData.MoneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка');
};

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
        
    }
}
checkSavings();
