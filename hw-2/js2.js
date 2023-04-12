let password = 'пароль';
let passPassword = prompt ('Введите пароль');
if (password === passPassword){
    console.log("Пароль введен верно");
}
else{
    console.log("Пароль введен неправильно");
}

let c = prompt ('Число C');
if (c > 0 && c < 10){
    console.log("верно");
}
else{
    console.log("неверно");
}

let d = prompt ('Число D');
let e = prompt ('Число E');
if (d > 100 || c > 100){
    console.log("верно");
}
else{
    console.log("неверно");
}

let a = Number ('2');
let b = Number ('3');
alert(a + b);


let month = Number  (prompt ('Введите номер месяца'));
switch (month) {
	case 12 :
    case 1 :
    case 2 :
		console.log('Зима');
		break;
	case 3 :
    case 4 :
    case 5 :
		console.log('Весна');
		break;
    case 6 :
    case 7 :
    case 8 :
		console.log('Лето');
		break;
    case 9 :
    case 10 :
    case 11 :
		console.log('Осень');
		break;
	default: console.log('Такого сезона нет');
		break;
}


let count = Number (prompt ('Пожалуйста, введите любое число'));
if (count != Number){
 alert ("НЕ ЧИСЛО")
}
    else if (count % 2 === 0){
        alert('Четное')
    }
    else {
        alert('Нечетное');
    }


let clientOS = Number (prompt ("У Вас Android, введите 1, если iOS - 0"))

if (clientOS === 1){
    let clientDeviceYearAndroid = Number (prompt ("Если Ваше устройство было произведено до 2015 года, нажмите 0, если после 2015 года нажмите 1"))
    if (clientDeviceYearAndroid === 0){
        alert('Установите облегченную версию приложения для Android по ссылке');
     }
      else if (clientDeviceYearAndroid === 1){
        alert('Установите версию приложения для Android по ссылке');
     }
     else {
        alert('Вы всегда можете получить ссылку на установку прилоения, перезагрузив страницу.');
    }
}
else if (clientOS === 0){
    let clientDeviceYeariOS = Number (prompt ("Если Ваше устройство было произведено до 2015 года, нажмите 0, если после 2015 года нажмите 1"))
    if (clientDeviceYeariOS === 0){
        alert('Установите облегченную версию приложения для iOS по ссылке');
     }
      else if (clientDeviceYeariOS === 1){
        alert('Установите версию приложения для iOS по ссылке');
     }
     else {
        alert('Вы всегда можете получить ссылку на установку прилоения, перезагрузив страницу.');
    }
}
else {
    alert('Вы всегда можете получить ссылку на установку прилоения, перезагрузив страницу.');
}