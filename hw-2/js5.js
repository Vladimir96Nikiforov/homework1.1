//задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}


//задание 2

let num = [1, 5, 4, 10, 0, 3];
numResalt = num.indexOf(4);
console.log(numResalt);

//задание 3
let numMass = [1, 3, 5, 10, 20].join ([' ']);
console.log(numMass);

//задание 4
        let arr = [];
        arr.length = 3;
        for (let i = 0; i < 3; i++)
        {
            arr[i] = [];
            for (let j = 0; j < 3; j++)
            {
                arr[i][j] = 1;
            }
        }
        console.log(arr);

//задание 5
let Mass222 = [2, 2, 2];
let Mass111 = [1, 1, 1];
let MassAll = [...Mass111, ... (Mass222)];
console.log(MassAll);

//задание 6
let sort = [9, 8, 7, 'a', 6, 5].sort ()
let pop = sort.pop();
console.log(sort);

//задание 7 +- делает по порядку вручную
let callNumber = Number  (prompt ('Число от 0 до 10'));
let massNumber = [9, 8, 7, 6, 5];

massNumber.forEach(function(massNumber) {
    if(massNumber === callNumber){
        alert('true');
    }
    else{alert('false')};
});


//задание 8
let mirror= 'abcdef';
    arr1 = mirror.split('');
    arr2 = arr1.reverse();
    arr3 = arr2.join()
    console.log(arr3);

//задание 9
let longMass = [[1, 2, 3,],[4, 5, 6]];
    let arrLong = longMass.join();
    console.log(arrLong);

//задание 10

let arrX = [2, 5, 3, 7, 8, 1];

for (let i = 0; i < arrX.length - 1; i++){

    console.log(arrX[i] +arrX[i + 1]);
};

//задание 11

const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return Math.pow(sweetItem, 2)
})

console.log(sweeterArray);

//задание 12

let getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];

getLengthWords.forEach(function(elem) {
	console.log(elem.length);
});


// задание 13+-

let arrNum = [1, 3, 5, 12];
    arrNum.forEach(function(item, arrNum) {
        arrNum = item * - 1 ;
        console.log(arrNum);
      });
