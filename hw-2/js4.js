// Задание 1
const count = function (a,b) {
    a = 10;
    b = 7;
    if (a > b) {
        return b
    }
    else return a
};
count();

// Задание 2
const rem = function (n) {
    n = 8
    if (n % 2 == 0){
        return('Четное');
    }
    else {
        return('Нечетное');
    }
};
rem();

// Задание 3
const upTwo = function (x){
    x = 12;
    console.log(Math.pow(x,2))
};
upTwo()


// const CountTwise = function(c){
//     let c = prompt('Введите число для возведения в квадрат');
//     console.log(Math.pow(c, 2))
// }

// Задание 4
const age = function (){
    let n = prompt ('Введите ваш возраст'); 
    if (n <= 0){
        alert('Вы ввели неправильное значение')
    }
    else if (n <= 12 && n > 0){
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


// Задание 5
function myFunction(){
    let firstNum = prompt ('Число один');
    let secondNum = prompt ('Число два');
    let res = "";
    res = Number.isNaN(firstNum || secondNum)
    if (res === false){
        return(firstNum * secondNum)
    }
    else {
        return('Одно или оба значения не являются числом');
    }
}
myFunction()

// Задание 6

// function myFunctionMult(){
//     let threeMult = prompt ('Введите число');
//     let res = "";
//     res = Number.isNaN(threeMult)
//     if (res === false){
//         return(Math.pow(threeMult, 3))
//     }
//     else {
//         return('ошибка');
//     }
// }
// myFunctionMult()
function myFunctionMult(){
    let threeMult = prompt ('Введите число');
    let res = "";
    res = Number.isNaN(threeMult)
    if (res === false){
        return('n в кубе равняется'(Math.pow(threeMult, 3)))
    }
    else {
        return('ошибка');
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


// Задание 7

// let circle1 = {
// radius: 27,
// }
// circle1.getArea = function (){
// f = this.radius * this.radius * 3.14;
// p = this.radius * 3.14 * 2;
// console.log(f);
// console.log(p);
// }
// circle1.getArea()

// let circle2 = {
//     radius: 7,
// }
// circle2.getArea = function (){
// f = this.radius * this.radius * 3.14;
// p = this.radius * 3.14 * 2;
// console.log(f);
// console.log(p);
// }
// circle2.getArea()



let circle1 = {
    radius: 27,
    }
    circle1.getArea = function (){
    f = this.radius * this.radius * 3.14;
    p = this.radius * 3.14 * 2;
    return(f,p);
    }
    console.log( circle1.getArea() );
    circle1.getArea()
    
    let circle2 = {
        radius: 7,
    }
    circle2.getArea = function (){
    f = this.radius * this.radius * 3.14;
    p = this.radius * 3.14 * 2;
    return(f,p);
    }
    console.log( circle1.getArea() );
    circle2.getArea()



// function getRectangleArea () {
//     return Math.PI * Math.pow(this.radius, 2);
// }
// function getRectanglePerimeter () {
//     return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//     radius: 10,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// }

// const circle2 = {
//     radius: 20,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// }

// console.log(`Площадь первой окружности равна ${circle1.getArea()}`);
// console.log(`Периметр первой окружности равен ${circle1.getPerimeter()}`);
// console.log(`Площадь второй окружности равна ${circle2.getArea()}`);
// console.log(`Периметр второй окружности равен ${circle2.getPerimeter()}`);