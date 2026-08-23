// Basic level
// task 1.
// Создать любой объект с двумя ключами и любыми значениями в них, а затем удалить ключи из объекта.

const apartment = {
    city: 'Minsk',
    number: 14,
};

delete apartment.city;
delete apartment.number;


// task 2.
//Создать любой объект с двумя ключами и любыми значениями в них, а затем
// проверить есть ли в объекте определенный ключ, и если есть вывести в
// консоль true .

const cityMinsk = {
    country: 'Belarus',
    phoneCode: +375,
};

if ('country' in cityMinsk) {
    console.log ('true');
}


// task 3.
//Дан объект:

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

// C помощью цикла for..in вывести в консоль сначала все ключи, потом
// значения ключей объекта.

for (let key in student) {
    console.log(key);
    console.log(student[key]);
}

// task 4.
//Дан объект:

const colors = {
    'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
    },
}

// Вывести в консоль слово красный и синий

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);


// task 5.
//Дан объект:

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}

// Вычислите среднюю зарплату сотрудников и результат поместите в
// соответствующую переменную

let allSalaries = 0;

for (let key in salaries) {
    allSalaries += salaries[key];
}

let averageSalary = allSalaries / Object.values(salaries).length;

console.log(averageSalary);

// task 6.
//Создать валидатор, запросить у пользователя логин и пароль для регистрации.
// Затем данные записать в объект.
// Потом попросить пользователя подтвердить данные. Если верно введен логин
// и пароль, вывести сообщение Добро пожаловать.

const user = {};

user.login = prompt('Enter your login for registration');
user.password = prompt('Enter your password for registration');

console.log(user);

let loginConfirm = prompt('Confirm your login');
let passwordConfirm = prompt('Confirm your password');

if (user.login === loginConfirm && user.password === passwordConfirm) {
        console.log('Добро пожаловать');
    } else {
        console.log ('Access is not available');
    }

