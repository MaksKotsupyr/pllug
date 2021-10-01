// Part 1
// Створити функцію яка б отримувала параметром масив з елементів різних типів (строки, масиви, числа, об’єкти і т.д), 
// на виході має повернути строку у camel case (приклад строки у camel case: thisIsExampleOfTheCamelCase), яка б поєднувала в собі всі елементи масиву які є строками.
function camelArrFunc(arr){
    let camelArr = [];
    let camelStr = '';
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "string"){
            camelArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
        }
    }
    camelStr = camelArr.join('');
    return camelStr;
}
console.log(camelArrFunc(['java', 5, [1,2,3], 'script', {name: 'maks'}, 33]));

// Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і повертала б масив у якому кожен елемент масиву є літерою англійського алфавіту 
// відповідний конкретному елементу масива (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …). Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k];
let alphabet = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j',
    11: 'k',
    12: 'l',
    13: 'm',
    14: 'n',
    15: 'o',
    16: 'p',
    17: 'q',
    18: 'r',
    19: 's',
    20: 't',
    21: 'u',
    22: 'v',
    23: 'w',
    24: 'x',
    25: 'y',
    26: 'z'
}
function numToStr(arr){
    let strArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=1 && arr[i]<=26){
            for(let key in alphabet){
                if(arr[i]==key){
                    strArr.push(alphabet[key]);
                }
            }
        }
    }
    return strArr;
}
console.log(numToStr([4, 3, 22, 11]));

// Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) 
// і повертає новий об’єкт у який містить тільки числа більші рівні 0.
function sortFunc(obj) {
    for(let key in obj){
        if(obj[key] < 0 || typeof obj[key] === 'string'){
            delete obj[key];
        }
    }
    return obj;
}
console.log(sortFunc({a: 22, b: -11.35, c: 41.2, d: 'hello'}));

// Part 2
// Скрипт який виводить в консоль дату і час коли DOM побудований, але css, зображення ще не завантажились.
document.addEventListener('DOMContentLoaded', () => {
    // console.log(Date());
});
// Скрипт який виводить в консоль дату і час коли DOM побудований і css, зображення вже завантажились.
window.onload = function(){
    // console.log(Date());
};
// Скрипт який виводить в консоль дату і час коли юзер натиснув на закрити вкладку або перезавантажити сторінку.
window.onbeforeunload = function () {
    // console.log(Date())
}
// Скрипт який виводить повертає назву браузера та назву операційної системи через дефіс "-" як одну строку.


// Скрипт який змушує браузер показувати сповіщення, коли ви намагаєтесь перезавантажити сторінку, видалити вкладку, чи вимкнути браузер.


// Скрипт який виводить в консоль скільки секунд юзер перебував на сторінці, після того як юзер натиснув на закрити вкладку або перезавантажити сторінку.


//Tasts with *
// Функція яка отримує параметром масив строк і повертає суму довжин усіх строк, рахувати тільки англ. букви без пробілів, знаків пунктуації, тощо.
function lengthStr(arr){
    let regArr = [];
    let regular = /[a-zA-Z]/gi;
    let array = arr.join('');
    regArr = array.match(regular);
    return regArr.length;
}
console.log(lengthStr(['str', 'java   s', 'веб', 'js']));

// Функція яка отримує параметром масив масивів кожен з яких містить два елемента і повертає 
// об'єкт у якому перший елемент вкладеного масиву є ключем, а наступний є його значенням, якщо зустрічаються два масива з однаковим ключем, 
// то в об'єкті залишається, той що був доданий першим. Приклад [['a', 'hello'], ['b', 33], ['a', 'bye']] => {a: 'hello', b: 33}
function sortObj(arr){
    let obj ={};
    let keysArr = [];
    let valuesArr = [];
    for(let i=0; i<arr.length; i++){
        if(keysArr.includes(arr[i][0])){
            continue;
        }else{
            keysArr.push(arr[i][0]);
            valuesArr.push(arr[i][1]);
            obj[keysArr[i]] = valuesArr[i];
        }
    }
    return obj;
}
console.log(sortObj([['a', 'hello'], ['b', 33], ['a', 'bye']]));

// Функція яка отримує параметром деяку строку, наприклад '?a=22&b=33&c=44&d=55&e=111' і повертає об'єкт сформований з цієї строки 
// як у даному випадку це {a: 22, b: 33, c: 44, d: 55, e: 111}.
function formatStr(str) {
    let obj = {};
    let arr = [];
    let reg = /[a-z]\=[0-9]{2,}/gi;
    arr = str.match(reg);
    for (var i = 0; i < arr.length; ++i)
        obj[arr[i][0]] = arr[i].slice(2);
    return obj
}
console.log(formatStr('?a=22&b=33&c=44&d=55&e=111'));

// Функція яка отримує параметром масив вкладених масивів і повертає масив з найглибше вкладеним елементом, 
// або елементами якщо рівень глибина вкладеності однакова. Приклад [1, [2, 3], [[4], 5], [[6]]] => [4, 6].


// Функція яка отримує параметром масив цілих чисел 0 >= value >= 10 і повертає масив вкладених масивів, 
// де глибина вкладеності масива дорівнює його значенню, наприклад: [1, 2, 1, 3, 4] => [[1], [[2]], [1], [[[3]]], [[[[4]]]]];


// Функція яка отримує параметром об'єкт data і масив fieldsToNumber і повертає новий об'єкт у якому всі строкові значення перетворені у число, 
// наприклад:  data = {a: '21', b: 'sensor', c: '0.2', d: '00.10'}, fieldsToNumber = ['a', 'c'] результат {a: 21, b: 'sensor', c: 0.2, d: '00.10'}.
// Строка яку потрібно перевести у число може бути десятковою і містити крапку "." або кому ",".