let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
list = list.sort(() => Math.random() - 0.5);
alert(list);
let a = prompt("Чему равнялся первый элемент массива?");
let b = prompt("Чему равнялся последний элемент массива?");
if(list[0] === a && list[-1] === b){
    alert('верно');
}
else if(list[0] === a && list[-1] !== b){
    alert('Вы были близки к победе!');
}
else if(list[0] !== a && list[-1] === b){
    alert('Вы были близки к победе!');
}
else {
    alert('неверно');
}