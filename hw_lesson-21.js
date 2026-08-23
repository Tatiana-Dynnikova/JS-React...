// Basic level

//task 1.
//Выведи все элементы массива в консоль с помощью метода forEach.

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// Реализуйте решение двумя способами, используя function declaration & arrow
// function

//1
const fib = fibonacci.forEach(item => console.log(item));

//2
function showConsole(arr) {
    console.log(arr);
}

showConsole(fibonacci);


//task 2.
//Используя метод map создайте новый массив, на основе массива users, в
// котором каждый элемент массива будет содержать строку вида:
// ['member 1: Darya', 'member 2: Masha', ... etc] .

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// Реализуйте решение двумя способами, используя function declaration & arrow function

//1 function decleration
const users1 = users.map(function(element, index) { return `member ${index + 1}: ${element}`});
console.log(users1);

//2 Arrow function
const users2 = users.map((element, index) => `member ${index + 1}: ${element}`);
console.log(users2);

//task 3.
//С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

const numbers = [7, -4, 32, -90, 54, 32, -21];

// Реализуйте решение двумя способами, используя function declaration & arrow function.

//1 function decleration
const numbers1 = numbers.filter(function(element) { return element > 0 });
console.log(numbers1);

//2 Arrow function
const numbers2 = numbers.filter((element) => element > 0 );
console.log(numbers2);


//task 4.
//Используя метод reduce получите сумму всех чисел массива.

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// Реализуйте решение двумя способами, используя function declaration & arrow function

//1 function decleration
const res1 = fibonacci1.reduce(function(sum, element) { return sum += element }, 0);
console.log(res1);

//2 Arrow function
const res2 = fibonacci1.reduce((sum, element) => sum += element, 0);
console.log(res2);


//task 5.
//Используя метод find найдите в массиве первое четное число.

const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// Реализуйте решение двумя способами, используя function declaration & arrow function

//1 function decleration
const even1 = numbers5.find(function(element) { return element % 2 == 0});
console.log(even1);

//2 Arrow function
const even2 = numbers5.find((element) => element % 2 == 0);
console.log(even2);


//Advanced level

//task 1.
// Написать функцию конструктор Student
// В каждом объекте студента должны быть поля salary , rate , name.
// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.
// На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.
// Создать массив students и поместить в него студентов.
// Написать функцию, которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.
// rate имеет 4 категории A B C D:
// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит

function Student(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;

    this.getSumCredit = function() {
        switch (this.rate) {
            case 'A': return this.salary * 12; break;
            case 'B': return this.salary * 9; break;
            case 'C': return this.salary * 6; break;
            case 'D': return 0; break;
            default: return 0;
        }
    }
}

const student1 = new Student('Dima', 200, 'C');
const student2 = new Student('Karina', 300, 'B');
const student3 = new Student('Alexey', 500, 'A');
const student4 = new Student('Veronika', 400, 'B');
const student5 = new Student('Arina', 150, 'D');

console.log(student5.getSumCredit('B'))

const arrStudents = [student1, student2, student3, student4, student5];
console.log(arrStudents);

// function getTotalCredit(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i].getSumCredit();
//   }
//   return total;
// }

// через метод reduce
const TotalSumCredit = arrStudents.reduce((sum, element, index) => sum += arrStudents[index].getSumCredit(), 0);

console.log(`Общая сумма ередита на группу: ${TotalSumCredit}`);


//task 2.
//Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из
// комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает
// новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет «Ths wbst s fr lsrs LL!».
// Примечание: для этой задачи y не считается гласной.

let str = 'This website is for losers LOL!';


//  /[aeiouаеёиоуыэюя]/gi — регулярное выражение в квадратных скобках ищет любую гласную букву.
// Флаг g (global) означает, что нужно удалить все совпадения, а не только первое.
// Флаг i (ignore case) делает поиск нечувствительным к регистру (удаляются и заглавные, и строчные буквы).

function deleteVowel(str) {
    let newStr = str.replace(/[aeiouаеёиоуыэюя]/gi, '');
    //let newStr = str.replace(/[aeiou]/gi, '');    ТОЖЕ РАБОТАЕТ =)
    return newStr;
}

console.log(deleteVowel(str))


//task 3.
//Нет истории, нет теории
// В приведенных ниже примерах показано, как написать функцию:
// accum('abcd') // -> 'A-Bb-Ccc-Dddd'
// accum('RqaEzty') // -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
// accum('cwAt') // -> 'C-Ww-Aaa-Tttt'

// Параметр — это строка, которая включает только буквы от a...z и A...Z

function accum(string) {
    let newString = string
        .toLowerCase()
        .split('')
        .map((item, index) => item.toUpperCase() + item.repeat(index))
        .join('-');

    return newString;
}

console.log(accum('abcd'));

//task 4.
//Самый высокий и самый низкий
// В этом небольшом задании вам дается строка чисел, разделенных пробелами,
// и вы должны возвращать наибольшее и наименьшее число.
// highAndLow('1 2 3 4 5') // return '5 1'
// highAndLow('1 2 -3 4 5') // return '5 -3'
// highAndLow('1 9 3 4 -5') // return '9 -5'
// Строка вывода должна состоять из двух чисел, разделенных одним пробелом,
// при этом наибольшее число должно быть первым

function highAndLow(numbers) {
  const arr = numbers.split(' ').map(Number);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${max} ${min}`;
}


console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));


//task 5.
//Изограммы
// Изограмма - это слово, в котором нет повторяющихся букв, последовательных
// или непоследовательных. Реализуйте функцию, которая определяет, является
// ли строка, содержащая только буквы, изограммой. Предположим, что пустая
// строка является изограммой. Регистр букв мы игнорируем.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
    let newStr = str.toLowerCase();
   
    for(let i = 0; i < newStr.length; i++) {
        for(let j = i + 1; j < newStr.length; j++) {
            if (newStr[i] === newStr[j]) {
                return false;
            } 
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));


//task 6.
//Считаем коды символов
// Учитывая строку, превратите каждый символ в его код символа ASCII и
// соедините их вместе, чтобы создать число. Поместите результат в
// переменную total1 .
// Затем замените все числа 7 на число 1 и назовите это число total2 .
// После верните разницу между суммой цифр total1 и total2 .
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

function getCodeChars(str) {
    let total1 = str
    .split('')
    .map((char) => char.charCodeAt(0))
    .join('');

    let total2 = total1.replace(/7/g, '1');
    let gap = total1 - total2;

    return `${total1} ${total2} ${gap}`;
}

console.log(getCodeChars('ABC'));
