let a = 10;
a = 20;
alert(a);

let iphoneData = 2007;
alert(iphoneData);

let nameMaster = 'Брендан Эйх';
alert(nameMaster);

let two = 2;
let ten = 10;
alert([ten + two , ten - two , ten * two, ten / two]);

let result = 2**5;
alert(result);

let aa = 9;
let b = 2;
alert(aa%b);


let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num++;
num--;
alert(num);


const info = prompt("Сколько вам лет?");
alert(info);
let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30,        // под ключом "age" хранится значение 30
    isAdmin: false,
    cityOfResidence: "MSK",
    age:44,
    info: prompt("Какую информацию хотите узнать o пользователе?") 
    };
delete user.cityOfResidence;
alert(user.info)
console.log(user);

let userName = prompt("Ваше имя?")
alert("Привет, " + userName);



