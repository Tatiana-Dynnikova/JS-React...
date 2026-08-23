// Basic level

// task 1.
// Дан массив:

const colors = ['red', 'green', 'blue'];

// Выведите в консоль его длину

console.log(colors.length);


// task 2.
// Дан массив:

const animals = ['monkey', 'dog', 'cat'];

// Выведите в консоль его последний элемент вне зависимости от его длинны

console.log(animals[animals.length - 1]);


// task 3.
// Дан массив:

const numbers = [5, 43, 63, 23, 90];

// Удалите все элементы в массиве и выведите в консоль полученный результат.
// Реализуйте решение двумя способами.

// 1
numbers.length = 0;
console.log(numbers)

// 2
numbers.splice(0, numbers.length);
console.log(numbers);

// 3 
// while (numbers.length > 0) {
//     numbers.pop();
// }


// task 4.
// Дан массив:

const students = ['Polina', 'Dasha', 'Masha'];

// Удалите последний элемент массива, затем вместо него добавьте в массив
// студента Borya .
// Удалите первый элемент массива, затем вместо него добавьте в массив
// студента Andrey .
// Полученный результат не забудьте вывести в консоль

students.pop()
students.push('Borya');
console.log(students);

students.shift();
students.unshift('Andrey');
console.log(students);


// task 5.
// Дан массив:

const cats = ['Gachito', 'Tom', 'Batman'];

// Выведите в консоль все элементы массива. Сначала через цикл for ,
// затем for..of

for (let i = 0; i < cats.length; i++) {
    console.log(`${i} элемент массива - ${cats[i]}`);
}

for (let cat of cats) {
    console.log(cat);
}


// task 6.

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9];

// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8.

const evenAndOdd = evenNumbers.concat(oddNumbers);
console.log(evenAndOdd);

console.log(evenAndOdd.indexOf(8));


// Advanced level

// task 1.
// Реализуйте функцию, которая будет проверять, является ли слово полиндромом.

const str1 = 'дом';
const str2 = 'топот';

function checkPolindrom(str) {
    const strReverse = str.split('').reverse().join('');
    if (str === strReverse) {
        console.log(`Слово ${str} является полиндромом.`);
    } else {
        console.log(`Слово ${str} - не полиндром.`);
    }
    
    return strReverse;
}

checkPolindrom(str2);


// task 2.

const matrix = [
[12, 98, 78, 65, 23],
[54, 76, 98, 43, 65],
[13, 324, 65, 312],
[9092, 22, 45, 90000],
];

// Выведите в консоль среднее значение чисел в многомерном массиве.

let sumMatrix = 0;
let count = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sumMatrix += matrix[i][j];
    count++;
  }
}

const averageMatrix = sumMatrix / count;
console.log(averageMatrix);

// const res = matrix.join(',').split(',');
// const res2 = matrix.map(row => row.join(','));
// const res3 = res.map(element => +element);

// let sum = 0;

// for (let i = 0; i < res3.length; i++) {
//     sum += res3[i];
// }

// const average = sum / res3.length;

// console.log(average);


// task 3.
//Дан массив:

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

// Создайте два массива, в один поместите все положительные числа включая 0,
// в другой все отрицательные. Оба массива затем выведите в консоль.

let arr1 = [];
let arr2 = [];

for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] >= 0) {
        arr1.push(mixedNumbers[i]); 
    } else {
        arr2.push(mixedNumbers[i]);
    }
}

console.log(arr1);
console.log(arr2);


// task 4.
//Создать массив длинной не менее 5, из динамически созданных случайных
// чисел. Далее написать алгоритм, который берет все числа из исходного
// массива, возводит их в куб и записывает в новый массив. В конце вывести оба
// массива в консоль


const randNums = [];

for (let i = 0; i <= 5; i++) {
    randNums[i] = +Math.random().toFixed(1);
}

console.log(randNums);

const cubeArr = randNums.map(item => (item ** 3).toFixed(3));
console.log(cubeArr);

