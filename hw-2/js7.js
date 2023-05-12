
// const hhh = [5, 100, 99, 4, 23].sort();
// console.log(hhh);

// const array1 = [1, 2, 7, 4];

// let b = [1,2,3,4,5].map(item => Math.pow(item, 2));

// // arr1 = array1.map(el => el **2);

// // console.log(arr);
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = b.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // Expected output: 10

//Задание 1
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people1.sort(function (a, b) {
    return a.age - b.age;
  });
  console.log(people1);


//Задание 2?

function isPositive(arr) {
const arrFinal = [];
arr.map(el => {
  if (el > 0) {
    arrFinal.push (el);
  }
})
return arrFinal;
}


function isMale(arrMail) {
  const arrFinalmale = [];
  arrMail.map(elem => {
    if (elem.gender == 'male') {
      arrFinalmale.push (elem);
    }
  })
  return arrFinalmale ;
  }


function filter(myArr, myFunction) {
return myFunction(myArr);
}
 console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]





//Задание 3

let date = new Date().toDateString();
let timerId = setInterval(() => console.log(date), 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);


//Задание 4


function delayForSecond0(callback) {



  setTimeout(() => {
callback()
}, 1000)

}

delayForSecond0(function () {
  console.log('Привет, Глаеб!');
})

//Задание 5+-

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				cb('Глеб');

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(sayHi)



