let hi = 0;
while (hi < 2) {
	console.log('Привет');
hi++;
}

let number = 1;
do {
    console.log(number);
    number++;
  } while (number < 6);


for (let longNumber = 7; longNumber < 23; longNumber++) {
    console.log(longNumber);
  }

let obj = {"Коля - зарплата":200, "Вася - зарплата":300, "Петя - зарплата":400};
for (let user in obj) {
    console.log(user + " = " + obj[user]);
  }
  

  let n = 1000;
  do {
    n=n/2;
    console.log(n); 
  } while (n > 50);


  let data = 3;
  do {
    data = data += 7
    console.log(data);
    alert('Сегодня пятница ' + data + ' число, отправьте отчет') 
  } while (data <= 31);