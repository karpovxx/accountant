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
	chooseExpenses: function () {
		/*     Создали метод chooseExpenses*/
		for (let i = 0; i < 2; i++) {
			let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
				b = prompt('Во сколько обойдется?', '')
			if (
				typeof a === 'string' &&
				typeof a != null &&
				typeof b != null &&
				a != '' &&
				b != '' &&
				a.length < 20
			) {
				console.log('yes')
				appData.MandatoryExpenses[a] = b
			} else {
				console.log('bad result')
				i--
			}
		}
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('Ошибка');
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (
			appData.budget / 30
		).toFixed() /* Округление до целого */
		console.log('Бюджет на 1 день составляет:' + appData.moneyPerDay + 'руб.');
		alert('Бюджет на 1 день составляет:' + appData.moneyPerDay + 'руб.');
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?'),
				percent = +prompt('Под какой процент?');

			appData.monthIncome = (save / 100 / 12) * percent
			alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
        let questionOptExpenses = prompt('Статья необязательных расходов', '');
        appData.nonMandatoryExpenses[i] = questionOptExpenses;
        console.log('Статья необязательных расходов: ' + questionOptExpenses);
    };
	},
	chooseIncome: function() {
		let  items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		if ( typeof(items) === 'string' && typeof(items) != null && typeof(items) != '')  {
			appData.income = items.split(', ');
		    appData.income.push(prompt('Может что-то еще?'));
			appData.income.sort();
		} else {
			console.log('Вы ввели не корректные данные!')
		};

		appData.income.forEach(function(item, i){
			alert('Способы доп. заработка: ' + (i+1) + ' - ' + item);
		});
	}
};

for (let key in appData) {
	console.log('Наша программа включает в себя данные: ' + key + '-' +appData[key]);
};

 
    
