function monthSeason (){
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
}