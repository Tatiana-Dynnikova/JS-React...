// Basic level

// task 1
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика

let x = 20;
let y = 58;
let z = 42;

let sumValues = x + y + z;
console.log(sumValues);

// task 2
// Создайте переменные
// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds

const secondsInMinutes = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const DaysInYear = 365;
const myAge = 29;

const myAgeInSeconds =  secondsInMinutes * minutesInHour * hoursInDay * DaysInYear * myAge;
console.log(myAgeInSeconds);

// task 3
// Создайте две переменные. Поместите в них переменную count и превратите в строку, 
// а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.

let count = 42;
let userName = '42';

let count1 = String(count);
let count2 = '' + count;
let count3 = `${count}`;

let userName1 = Number(userName);
let userName2 = +userName


console.log(typeof count);
console.log(typeof count1);
console.log(typeof count2);
console.log(typeof count3);

console.log(typeof userName);
console.log(typeof userName1);
console.log(typeof userName2);

// task 4
// Имеется три переменные
// Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей 
// и результат выведите в консоль.

let a = 1;
let b = 2;
let c = 'белых медведей';

let phrase = `${a}${b} ${c}`;
console.log(phrase);

// task 5
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну 
// переменную lengthWords и посчитайте в ней длину всех слов из списка

let firstWord = 'доступ';
let secondWord = 'морпех';
let thirdWord = 'наледь';
let forthWord = 'попрек';
let fifthWord = 'рубило';

let lengthWords = firstWord + secondWord + thirdWord + forthWord + fifthWord

console.log(lengthWords.length);

// task 6
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида
// `Variable: %variable name% have type: %type variable%`

let num = 5;
let str = 'text';
let isTruthful = true;

console.log(`${num}: num have type: ${typeof num}`);
console.log(`${str}: str have type: ${typeof str}`);
console.log(`${isTruthful}: isTruthful have type: ${typeof isTruthful}`);

// task 7
// Запросить у пользователя имя и возраст и вывести их в консоль.

let userFirstName = prompt('What is your name?', '');
let userAge = prompt('What is your age?');

console.log(userFirstName);
console.log(userAge);


// Advanced level

// task 1
//Поменяйте значение переменных местами не создавая дополнительной переменной

let aa = 4;
let bb = 3;

// !! необходимо использовать деструктурирующее присваивание, т.е. справа создается массив из старых значений переменных,
// который тут же распаковывается и присваивается переменным в новом порядке.

[aa, bb] = [bb, aa];

console.log(aa);
console.log(bb);


// task 2
//В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
// Создайте переменную cipher и поместите туда необходимые символы

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);



