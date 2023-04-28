//Задание 1
let stringText = 'преобразуйте строку js в верхний регистр';
console.log(stringText.toUpperCase());


//Задание 2
const products = ['Борт', 'Борьба', 'Барин', 'боевой'];
const search = 'Бо';

products.forEach((product) => {
	if (product.toLowerCase().includes(search.toLowerCase())) {
		console.log(product);
	}
});

//Задание 3
let Num = 32.58884;
console.log(Math.floor(Num));
console.log(Math.ceil(Num));
console.log(Math.round(Num));

//Задание 4
// let maxMinNum = [52, 53, 49, 77, 21, 32];
// function getMaxOfArray(maxMinNum) {
//     return Math.max.apply(null, maxMinNum);
//   }
//   getMaxOfArray();
console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(maxMinNum));


//Задание 5
function getRandomInt() {
    console.log(Math.random(0,10));
  }
  getRandomInt()


  
//Задание 6
function rand() {
  let arrRand = [];
  let maxRand = Number(prompt('Введите рандомное число от 0 до 10'));
  for (let i = 0; i < maxRand / 2; i++) {
      // arrN.length = maxRand / 2;
      arrRand[i] = (Math.round(Math.random() * maxRand));

  }
  return arrRand;
}
console.log(rand());


//Задание 7 целое
let a = Number(prompt('Введите первую переменную'));
let b = Number(prompt('Введите вторую переменную'));
function getRandom() {
    console.log(Math.round(Math.random(a,b)*b));
  }
  getRandom()

//Задание 8

let Date1 = new Date();
console.log(Date1);

//Задание 9
let myDate = new Date(); // получаем текущую дату
console.log(+myDate)

let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = myDate - days73;
let currentDate = new Date(searchDate);
console.log(currentDate);

//Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate2 = new Date();


let hour = myDate2.getHours();
let minute = myDate2.getMinutes();
let second = myDate2.getSeconds();
if (minute < 10) {
	minute = "0" + minute;
}
if (second < 10) {
	second = "0" + second;
}


let fullDate = "Сегодня: " + myDate.getDate() +
" " + months[myDate2.getMonth()] +
" " + myDate2.getFullYear() +
" - это " + days[myDate2.getDay()] + 
" " + ", текущее время: " + hour + ":" + minute + ":" + second;

console.log(fullDate); 
