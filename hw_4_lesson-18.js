// Базовый уровень

// task 1. +
// Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
// переданного в нее параметра. Если передадим число 100 то, надо вычислить
// сумму чисел от 0 до 100 (должно получится 5050).

function getSum(j) {
    let sum = 0;
    for (i = 0; i <= j; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(100));


// task 2. +
// Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
// который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

function getCredit(sumCreadit) {
    const creditRate = 0.17;
// Переводим годовую ставку в месячную
    const monthlyRate = creditRate / 12;
    const periodMonths = 60;

// Формула платежа
    const x = Math.pow(1 + monthlyRate, periodMonths);
    const monthlyPayment = (sumCreadit * x * monthlyRate) / (x - 1);

// Общая сумма выплат за весь срок
    const totalPayout = monthlyPayment * periodMonths;

// Переплата = общие выплаты - изначальная сумма кредита
    const overayment = totalPayout - sumCreadit;

// Округляем до копеек с помощью метода toFixed()
    return Number(overayment.toFixed(2));
}

    const result = getCredit(10000);
    console.log(`Сумма переплаты: ${result} руб.`);



// task 3. +
//Написать функцию trimString , которая в качестве аргумента принимает три параметра:
// строку, значение «от», значение «по»
// После вызова функция должна вернуть переданную строку, обрезанную по значениям «от» и «по».

function trimString(string, start, end) {
    let subString = '';

    // for (let i = 0; i < string.length; i++) {
    //     if(i > start && i < end) {
    //         subString += string[i];
    //     }
    // }

    for (i = start; i < end; i++) {
        subString += string[i];
    }

    return subString;
    // return string.substring(start, end);
}

console.log(trimString('I am learning JavaScript.', 14, 24));


// task 4. +
//Написать функцию getSumNumbers. Она будет принимать число и вычислять
//сумму цифр, из которых состоит число. Для 2021 это будет 5

// function getSumNumbers(number) {
//     let sum = 0;
//     let stringNumber = String(number);
    
//     for (let i = 0; i < stringNumber.length; i++) {
//         sum += +stringNumber[i];
//     }

//     return sum;
// }

function getSumNumbers(number) {
    let sumNumbers = number.toString()
        .split('')
        .reduce((sum, numbers) => sum + +numbers, 0);
    return sumNumbers;
}

console.log(getSumNumbers(2021));


// task 5. +
//Написать функцию getSum , которая принимает два целых числа a и b, они могут
// быть положительными или отрицательными, найти сумму всех чисел между
// ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
// getSum(1, 0) == 1 // 1 + 0 = 1
// getSum(1, 2) == 3 // 1 + 2 = 3
// getSum(0, 1) == 1 // 0 + 1 = 1
// getSum(1, 1) == 1 // 1 Since both are same
// getSum(-1, 0) == -1 // -1 + 0 = -1
// getSum(-1, 2) == 2 // -1 + 0 + 1 + 2 = 2


function getSum(a, b) {
    if (a === b) {
        return a || b;
    }

    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

console.log(getSum(1, 2));


// task 6. +
//Напишите функцию fooBoo которая принимает в качестве аргумента три параметра:
// булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true , то запускаем функцию foo, иначе boo.

function fooBoo(boolean, foo, boo) {
    boolean ? foo() : boo();
}

function foo() {
    console.log(foo.name);
}

function boo() {
    console.log(boo.name);
}

console.log(fooBoo(false, foo, boo));


// Продвинутый уровень

// task 1. 
//Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true , если треугольник можно построить со
// сторонами заданной длины, и false в любом другом случае.

function constructTriangle (a, b, c) {

    return (
        a > 0 && 
        b > 0 && 
        c > 0 && 
        a + b > c && 
        a + c > b && 
        b + c > a
    ); 

}

console.log(constructTriangle(2, 2, 6));

// task 2. 
//Ваша задача - разбить плитку шоколада заданного размера n x m на
// маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть
// разбит. Реализуйте функцию, которая будет возвращать минимальное
// количество необходимых надломов.
// Например, если вам дается плитка шоколада размером 2 x 1, вы можете
// разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x
// 1 вы должны сделать два надлома.
// Если входные данные недействительны, вы должны вернуть 0 (поскольку
// надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда
// будет неотрицательным целым числом.

function breakChocolate (n, m) {
    const pieces = n * m - 1;

    if (n <= 0 || n <= 0 ) {
        return  0;
    }
    return pieces;
}

console.log(breakChocolate(2, 4));

