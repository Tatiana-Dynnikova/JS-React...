"use strict";
// С ниже приведенным массивом решить следующие задачи. Все функции и данные
// должны быть протипизированы:
// 1. Создать строку из имен пользователей через запятую.
// 2. Подсчитать общее количество машин у пользователей.
// 3. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие образования.
// 4. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие животных.
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
// строку с названиями марок автомобилей через запятую.
const users = [
    {
        name: 'Harry Felton',
        phone: '(09) 897 33 33',
        email: 'felton@gmail.com',
        animals: ['cat'],
        cars: ['bmw'],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: 'May Sender',
        phone: '(09) 117 33 33',
        email: 'sender22@gmail.com',
        hasChildren: true,
        hasEducation: true
    },
    {
        name: 'Henry Ford',
        phone: '(09) 999 93 23',
        email: 'ford0@gmail.com',
        cars: ['bmw', 'audi'],
        hasChildren: true,
        hasEducation: false
    }
];
//1. Создать строку из имен пользователей через запятую.
function joinstringUserNames(items, key) {
    return items.map((item) => item[key]).join(', ');
}
const stringUserNames = joinstringUserNames(users, 'name');
console.log(stringUserNames);
//2. Подсчитать общее количество машин у пользователей.
function getTotalCars(items, key) {
    return items.reduce((acc, item) => acc + (item[key]?.length ?? 0), 0);
}
const totalCars = getTotalCars(users, 'cars');
console.log(totalCars);
// 3. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие образования.
function getUserHasEducation(items, key) {
    return items.filter(item => item[key]);
}
const userHasEducation = getUserHasEducation(users, 'hasEducation');
console.log(userHasEducation);
// 4. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие животных.
function getUserHasAnimals(items, key) {
    return items.filter(item => item[key]);
}
const userHasAnimals = getUserHasAnimals(users, 'animals');
console.log(userHasAnimals);
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
// строку с названиями марок автомобилей через запятую.
function getstringUsersCars(items, key) {
    return items.flatMap(item => item[key] ?? []).join(', ');
}
const stringUsersCars = getstringUsersCars(users, 'cars');
console.log(stringUsersCars);
