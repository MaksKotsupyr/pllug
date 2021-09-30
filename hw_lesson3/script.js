// Створити пустий об’єкт;
let person = {};

// Створити пустий об’єкт без прототипу;
let obj = Object.create(null);

// Додати до об’єкта будь які нові поля всіма відомими способами;


// Створити пустий масив;
let arr = [];

// Створити пустий масив довжиною 100500 елементів;
let array = [];
array[100499]=[];

// Створити масив з декількома елементами;
// Зробити заповнений масив пустим;
let mass = [5, 'str', true];
mass.length = 0;

// Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з масиву за його індексом та поверне новий масив(оновлений- після видалення);
function deleteIndex(arr1, index){
    arr1.splice(index, 1);
    console.log(arr1);
}
deleteIndex([1,2,3,4,5], 3);

// Створити функцію, яка приймає один масив у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;
function boolArr(massive){
    massive.length > 0 ? console.log(true) : console.log(false);
}
boolArr([]);

// Створити функцію, яка приймає один об’єкт у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;
let emptyObj = {};
function boolObj(obj){
    Object.keys(obj).length > 0 ? console.log(true) : console.log(false);
}
boolObj(emptyObj);

// Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;
function combineArr(arr1, arr2) {
    let combinedArr = arr1.concat(arr2);
    console.log(combinedArr)
}
combineArr([1,2], [3,4]);

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з елементів попереднього в степені 3. Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];
function powArr(arr) {
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element*element*element);
    });
    console.log(newArr)
}
powArr([1,3,5]);

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з непарних елементів вхідного масиву;
let filterMass = [1,2,3,4,5];
function filterArr(val) {
    if(val%2 == 1){
        return true;
    }
}
console.log(filterMass.filter(filterArr));

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається тільки з цілих елементів вхідного масиву; Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];
let intFilterMass = [5, 3.14, 4.1, 10, 11, 20.1, 20, 33.3];
function intFilterArr(val) {
    if(val%1 === 0){
        return true;
    }
}
console.log(intFilterMass.filter(intFilterArr));

// Створити функцію, яка нічого не повертає;
function doNothing() {
    return;
}
console.log(doNothing() === undefined);