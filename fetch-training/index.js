// Перейдите по ссылке.
// Во вкладке Resources лежит ключ /todos - Это именно те данные
// которые нам нужны.
// Далее напишите две функции getTodos & printTodos.
// Функция getTodos делает запрос по указанному адресу и забирает
// данные.
// Функция printTodos создает список ul , и в каждый
// элемент li добавляет данные из полученного объекта с делом.
// Нам нужны ключи из объекта id title

const URL_TODOS = 'https://jsonplaceholder.typicode.com/todos'

function printTodos(todos) {
   // Очищаем контейнер перед добавлением новых данных
  todosContainer.innerHTML = ''; 
  
  const todoList = document.createElement('ul');
  const fragment = document.createDocumentFragment();

  todos.forEach(todo => {
    // Создаем элемент списка li
    const li = document.createElement('li');
    
    // Создаем чекбокс (input с типом checkbox)
    const todoCheckbox = document.createElement('input');
    todoCheckbox.type = 'checkbox';
    todoCheckbox.checked = todo.completed; // Устанавливаем статус
    
    // Создаем заголовок для текста задачи
    const todoTitle = document.createElement('h3');
    todoTitle.textContent = `[ID: ${todo.id}] ${todo.title}`;
    
    // Собираем элементы вместе
    li.append(todoCheckbox, todoTitle);
    fragment.append(li);
  });

  // Добавляем фрагмент в список, а список — в контейнер
  todoList.append(fragment);
  todosContainer.append(todoList);
}


function getTodos() {
   fetch(URL_TODOS)
   .then((response) => {
      if (!response.ok) {
      throw new Error(`HTTP: ${response.status}`);
      }
      return response.json();
   })
   .then((data) => {
      console.log(data);
   })
   .catch((error) => {
      console.error(error);
   });
 }

 getTodos();
