const count = function (a,b) {
    a = 10;
    b = 7;
	if (a > b) {
        console.log(b);
    }
    else if (b > a){
        console.log(a);
    }
    else {
        console.log(b);
    }
};
count();


const rem = function (n) {
    n = 8
    if (n % 2 == 0){
        console.log('Четное');
    }
    else {
        console.log('Нечетное');
    }
};
rem();

const upTwo = function (x){
    x = 12;
    console.log(Math.pow(x,2))
};
upTwo()


// const CountTwise = function(c){
//     let c = prompt('Введите число для возведения в квадрат');
//     console.log(Math.pow(c, 2))
// }


const age = function (){
    let n = prompt ('Введите ваш возраст'); 
    if (n < 0){
        alert('Вы ввели неправильное значение')
    }
    else if (n < 12 && n > 0){
        alert('Привет друг')
    }
    else {
        alert('Здравствуйте')
    }
}
age()


// // let firstNum = prompt ('Число один')
// // let secondNum = prompt ('Число два')
// let numFunc = function () {
//     // let firstNum = prompt ('Число один');
//     // let secondNum = prompt ('Число два');
//     resultOne = firstNum.isNaN();
//     resultTwo = firstNum.isNaN();
//     if (resultOne || resultTwo === true) {
//         alert('Одно или оба значения не являются числом')
//     }
//     else {
//         alert(firstNum * secondNum)
//     }
// }
// numFunc()

function myFunction(){
    let firstNum = prompt ('Число один');
    let secondNum = prompt ('Число два');
    let res = "";
    res = Number.isNaN(firstNum || secondNum)
    if (res === false){
        alert(firstNum * secondNum)
    }
    else {
        alert('Одно или оба значения не являются числом');
    }
}
myFunction()


function myFunctionMult(){
    let threeMult = prompt ('Введите число');
    let res = "";
    res = Number.isNaN(threeMult)
    if (res === false){
        alert(Math.pow(threeMult, 3))
    }
    else {
        alert('ошибка');
    }
}
myFunctionMult()


// const circle1 = () => {
//  r = {
//     radius: 7  
// }
// getArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// console.log(r.radius.getArea());
// }
// circle1()
//     let radius =7

//     // Class method
//    function getArea() {
    
//         xf = radius * radius;
//         console.log(xf);
//     }
//     getArea()

let circle1 = {
radius: 27,
}
circle1.getArea = function (){
f = this.radius * this.radius * 3.14;
p = this.radius * 3.14 * 2;
console.log(f);
console.log(p);
}
circle1.getArea()

let circle2 = {
    radius: 7,
}
circle2.getArea = function (){
f = this.radius * this.radius * 3.14;
p = this.radius * 3.14 * 2;
console.log(f);
console.log(p);
}
circle2.getArea()