// С ниже приведенным объектом решить следующие задачи:
// 1. Создать строку из названий предметов написанных через запятую.
// 2. Подсчитать общее количество студентов и учителей на всех предметах.
// 3. Получить среднее количество студентов на всех предметах.
// 4. Создать массив из объектов предметов.
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему.

const subjects = {
mathematics: {
students: 200,
teachers: 6
},
biology: {
students: 120,
teachers: 6
},
geography: {
students: 60,
teachers: 2
},
chemistry: {
students: 100,
teachers: 3
}
}

// 1.Создать строку из названий предметов написанных через запятую.
const result1 = Object.keys(subjects).join(', ');
console.log(result1); 

// 2.Подсчитать общее количество студентов и учителей на всех предметах.
const total = Object.values(subjects).reduce((acc, item) => {
    acc.students += item.students;
    acc.teachers += item.teachers;
    return acc;
    }, { students: 0, teachers: 0 });
console.log(`Всего студентов: ${total.students}`);
console.log(`Всего учителей: ${total.teachers}`);

//3.Получить среднее количество студентов на всех предметах.
const totalStudents = Object.values(subjects).reduce((acc, item) => acc + item.students, 0);
console.log(totalStudents / Object.keys(subjects).length);

// 4. Создать массив из объектов предметов.
const arrSubjects = Object.entries(subjects).map(([name, data]) => ({
  name , ...data
}));
console.log(arrSubjects);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему.
const arrSubjects2 = Object.entries(subjects).sort((prev, next) => next[1].teachers - prev[1].teachers);
console.log(arrSubjects2);
