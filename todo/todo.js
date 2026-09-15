const createDomElement = (tag, classes, text) => {
    const newElement = document.createElement(tag);
    for (let key of classes) {
        newElement.classList.add(key);
    }
    if (text) {
        newElement.textContent = text;
    } 
    return newElement;
};

const divMain1 = createDomElement('div', ['main', 'container']);
const btnDeleteAll = createDomElement('button', ['btn', 'btn_delete-All'], 'Delete all');
const btnDeleteLast = createDomElement('button', ['btn', 'btn_delete-Last'], 'Delete last');
const inputTask = createDomElement('input', ['input', 'main__input']);
inputTask.setAttribute('placeholder', 'Enter todo...');
const btnAdd = createDomElement('button', ['btn', 'btn_add'], 'Add');
divMain1.append(btnDeleteAll, btnDeleteLast, inputTask, btnAdd);

const divMain2 = createDomElement('div', ['main', 'container']);
const spanCountAll = createDomElement('span', ['main__span'], `All: `);
const spanEnded = createDomElement('span', ['main__span'], `Completed: `);
const btnShowAll = createDomElement('button', ['btn', 'main__btn2', 'btn_show-all'], 'Show All');
const btnShowCompleted = createDomElement('button', ['btn', 'main__btn2', 'btn_completed'], 'Show Completed');
const inputSearch = createDomElement('input', ['main__input', 'main__input-search']);
inputSearch.setAttribute('placeholder', 'Search...')
divMain2.append(spanCountAll, spanEnded, btnShowAll, btnShowCompleted, inputSearch);

const fragment = document.createDocumentFragment();
fragment.append(divMain1, divMain2);

const divRoot = document.getElementById('root');
divRoot.append(fragment)

const divTodoList = createDomElement('div', ['container-tasks']);
divRoot.append(divTodoList);


const todoLSKey = 'todos';
let todos = getData();

function getData() {
    let getLSValue = localStorage.getItem(todoLSKey);
    if (!getLSValue) { return [] }

    try {
        return JSON.parse(getLSValue);
    } catch (error) {
        console.error('Parsing error:', error);
        return [];
    }
}

function setData() {
    try {
        localStorage.setItem(todoLSKey, JSON.stringify(todos));
    } catch (error) {
        console.error('Stringify error:', error);
        // return {};
    }
}

function getCurrentFormattDate() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    return formattedDate;
}

function renderTodoTasks() {
    divTodoList.innerHTML = ''; // Очищаем старый список
    // Обновляем счетчики
    spanCountAll.textContent = `All: ${todos.length}`;
    const completedCount = todos.filter(t => t.isChecked).length;
    spanEnded.textContent = `Completed: ${completedCount}`;

    const fragment = document.createDocumentFragment();

    todos.forEach(todo => {
    const divTask = createDomElement('div', ['task', 'container']);
    divTask.dataset.id = todo.id;
    if (todo.isChecked) divTask.classList.add('task_bg');

    const label = createDomElement('label', ['task__label']);
    if (todo.isChecked) label.classList.add('label');
    
    const checkbox = createDomElement('input', ['task__checkbox']);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.isChecked;
    
    label.append(checkbox);

    const titleTask = createDomElement('h3', ['task__title']);
    titleTask.textContent = todo.text;
    if (todo.isChecked) titleTask.classList.add('title');

    const divInTask = createDomElement('div', ['task__inner-div']);
    const btnClose = createDomElement('button', ['btn', 'task__btn-close'], '×');
    const dateElement = createDomElement('p', ['task__date'], todo.date);

    divInTask.append(btnClose, dateElement);
    divTask.append(label, titleTask, divInTask);
    fragment.append(divTask);
    });

    divTodoList.append(fragment);
}

// --- ОБРАБОТЧИКИ СОБЫТИЙ ---

// Добавление новой таски
btnAdd.addEventListener('click', () => {
  const text = inputTask.value.trim();
  if (!text) return; // Не добавляем пустые задачи

  const newTodo = {
    id: crypto.randomUUID().slice(0, 5),
    date: getCurrentFormattDate(),
    text: text,
    isChecked: false,
  };

  todos.push(newTodo);
  setData();
  renderTodoTasks();
  inputTask.value = '';
});

// Переключение чекбокса (Выполнено / Не выполнено)
divTodoList.addEventListener('change', (event) => {
  if (event.target.classList.contains('task__checkbox')) {
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
});

// Удаление одной таски по кнопке крестика
divTodoList.addEventListener('click', (event) => {
  const buttonClose = event.target.closest('.task__btn-close');
  if (!buttonClose) return;

  const taskElement = buttonClose.closest('.task');
  const taskId = taskElement.dataset.id;

  // Фильтруем массив, удаляя элемент
  todos = todos.filter(item => item.id !== taskId);
  setData();
  renderTodoTasks();
});

// Удалить последнюю
btnDeleteLast.addEventListener('click', () => {
  if (todos.length > 0) {
    todos.pop();
    setData();
    renderTodoTasks();
  }
});

// Удалить все
btnDeleteAll.addEventListener('click', () => {
  todos = [];
  setData();
  renderTodoTasks();
});

// Первичный рендеринг при загрузке страницы
renderTodoTasks();

