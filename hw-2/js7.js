//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort(function (a, b) {
    return a.age - b.age;
  });
  console.log(people);


//Задание 2?

function isPositive(callback) {

}
function isMale() {
    // (people1 => people1.gender = 'male');
}
function filter() {

}
const num = [3, -4, 1, 9];
const only = num.filter((number) => number >= 0);

console.log(only, isPositive); // Должен выводить [3, 1, 9]
// filter([3, -4, 1, 9])

const peopleM = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
const Male = peopleM.filter(function(genderAll){return genderAll.gender =='male'})

console.log(Male); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
// filter(peopleM, isMale)

//Задание 3

let date = new Date().toDateString();
let timerId = setInterval(() => console.log(date), 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);


//Задание 4


function delayForSecond(callback) {
  // setTimeout(callback, 1000);
  // callback();


  setTimeout(() => {
}, 1000)
}

delayForSecond(function () {
  console.log('Привет, Глаеб!');
})




// function delayForSecond(callback) {
// setTimeout(()=>
// {
//   console.log('fdf');
// }, 1000)
//     // setTimeout(() => delayForSecond, 1000);
//   callback();
// }

// // delayForSecond(function () {
// //   console.log('Привет, Глеб!');
// // })



//Задание 5+-

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
cb();
delayForSecond(sayHi('Глеб'))





// function calling() {

//   console.log('Звоню!')

// };

// function beeps(callback) {
//   setTimeout(() => {
//       console.log('Идут гудки...')
//     callback();
//   }, 1000);
  
// }
// function talk() {
//   console.log('Разговор')

// }
// calling();
// beeps(talk);