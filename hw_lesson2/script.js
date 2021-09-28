// написати скріпт, який призведе до краху вкладки в браузері
// for(let i=0; i<Infinity;i++){
//     console.log(i)
// }

// Не працює

// Написати код, яка на вході приймає стрічку і змінює всі малі букви на великі, а великі на малі. Тобто ‘Test’ ⇒ ‘tEST’;
let str = prompt('Write some srting');
let massStr = [];   
let changedStr = [];
massStr = str.split('');
for(let i=0; i<massStr.length; i++){
    if(massStr[i].toUpperCase() == massStr[i]){
        changedStr.push(massStr[i].toLowerCase());
    }else if(massStr[i].toLowerCase() == massStr[i]){
        changedStr.push(massStr[i].toUpperCase());
    }
}
console.log('New str: '+changedStr.join(''));

// Працює

//Попрактикуватися з оператором typeOf
typeof undefined // "undefined"
typeof 0 // "number"
typeof 1n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol('id') // "symbol which is describe 'id'"
typeof {} // "object"
typeof null // "object"  
typeof function(){} // "function"  

// Вивчитити в чому різниця між оголошенням змінних за допомогою ключового слова var/let/const;
// var - змінна є глобальною. коли вказується поза будь якою функцією, це означає, що будь яка змінна оголошена через var доступна для використання по всьому вікні
// var є локальною коли оголошується всередині функції, в цьому є проблема інкапсуляції та конфідкнційності даних. Також можливе переоголошення змінної.

// let - має блочну область видимості, також можуть бути оновлені, але не оголошені знову. Якщо викликати змінну до її оголошення, то виникне ReferenceError, в той час як var виведе undefined.

// const - має також блочну область видимості, змінні const не можуть бути ні оновлені ні оголошені повторно.

// Вивчити які бувають типи даних і для чого вони призначенні.
// Boolean - логічне значення типу true or false
// String - текстове значення - "text"
// Number - числове значення - 5
// BigInt - число більше ніж 2 в 53 степені, пишуться з додаванням вкінці n - 9007199254740993n
// Null - по своїй суті пустота
// Underfined - невідоме значення, тобто змінна без значення
// Symbol - символьний тип, який унікальний і його не можна змінити
// Object - об'єкт, асоціативний масив, набір ключ/значення
