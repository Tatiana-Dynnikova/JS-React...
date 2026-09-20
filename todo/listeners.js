import {todos, setData, renderTodoTasks, changeTodos} from './todo.js';
import {inputTask, divTodoList, inputSearch} from './todo.js';
import {getCurrentFormattDate} from './todo-function.js';


export function addTask() {
  const text = inputTask.value.trim();
  if (!text) return; // Не добавляем пустые задачи

  const newTodo = {
    id: crypto.randomUUID().slice(0, 5),
    date: getCurrentFormattDate(),
    text,
    isChecked: false,
  };

  todos.push(newTodo);
  setData();
  renderTodoTasks();
  inputTask.value = '';
}

export function toggleCheckbox({target}) {
  if (target.classList.contains('task__checkbox')) {
    const checkbox = event.target;
    const taskElement = checkbox.closest('.task');
    const taskId = taskElement.dataset.id;

    // Находим задачу в массиве и меняем статус
    const todo = todos.find(item => item.id === taskId);
    if (todo) {
      todo.isChecked = checkbox.checked;
      setData();
      renderTodoTasks(); // Перерисовываем, чтобы применились классы
    }
  }
}

export function deleteTaskCross({target}) {
  const buttonClose = target.closest('.task__btn-close');
  if (!buttonClose) return;

  const taskElement = buttonClose.closest('.task');
  const taskId = taskElement.dataset.id;

  // Фильтруем массив, удаляя элемент
  todos = todos.filter(item => item.id !== taskId);
  setData();
  renderTodoTasks();
}

export function deleteLast() {
  if (todos.length > 0) {
    todos.pop();
    setData();
    renderTodoTasks();
  }
}

export function deleteAll() {
  changeTodos([]);
  setData();
  renderTodoTasks();
}

export function showCompleted() {
  const tasks = divTodoList.querySelectorAll('.task');
  tasks.forEach(item => {
    if(!item.classList.contains('task_bg')) {
      item.classList.add('hidden');
    }
  })
}

export function showAll() {
  renderTodoTasks();
}

export function makeSearch() {
  const search = inputSearch.value.trim().toLowerCase();

  // Фильтруем задачи
  const filteredTasks = todos.filter(({text}) => {
    return text.toLowerCase().includes(search);
  });

  // Передаем отфильтрованный массив в функцию рендера
  renderTodoTasks(filteredTasks);
}