import {createDomElement} from './todo-function.js';
import {addTask, toggleCheckbox, deleteTaskCross, deleteLast, deleteAll, showCompleted, showAll, makeSearch} from './listeners.js';

const divMain1 = createDomElement('div', ['main', 'container']);
const btnDeleteAll = createDomElement('button', ['btn', 'btn_delete-All'], 'Delete all');
const btnDeleteLast = createDomElement('button', ['btn', 'btn_delete-Last'], 'Delete last');
export const inputTask = createDomElement('input', ['input', 'main__input']);
inputTask.setAttribute('placeholder', 'Enter todo...');
const btnAdd = createDomElement('button', ['btn', 'btn_add'], 'Add');
divMain1.append(btnDeleteAll, btnDeleteLast, inputTask, btnAdd);

const divMain2 = createDomElement('div', ['main', 'container']);
const spanCountAll = createDomElement('span', ['main__span'], `All: `);
const spanEnded = createDomElement('span', ['main__span'], `Completed: `);
const btnShowAll = createDomElement('button', ['btn', 'main__btn2', 'btn_show-all'], 'Show All');
const btnShowCompleted = createDomElement('button', ['btn', 'main__btn2', 'btn_completed'], 'Show Completed');
export const inputSearch = createDomElement('input', ['main__input', 'main__input-search']);
inputSearch.setAttribute('placeholder', 'Search...')
divMain2.append(spanCountAll, spanEnded, btnShowAll, btnShowCompleted, inputSearch);

const fragment = document.createDocumentFragment();
fragment.append(divMain1, divMain2);

const divRoot = document.getElementById('root');
divRoot.append(fragment)

export const divTodoList = createDomElement('div', ['container-tasks']);
divRoot.append(divTodoList);


const todoLSKey = 'todos';
export let todos = getData();

export function changeTodos(newValue) {
  todos = newValue;
}

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

export function setData() {
    try {
        localStorage.setItem(todoLSKey, JSON.stringify(todos));
    } catch (error) {
        console.error('Stringify error:', error);
        // return {};
    }
}

export function renderTodoTasks(tasksToRender = todos) {
    divTodoList.innerHTML = ''; // Очищаем старый список
    // Обновляем счетчики
    spanCountAll.textContent = `All: ${todos.length}`;
    const completedCount = todos.filter(({isChecked}) => isChecked).length;
    spanEnded.textContent = `Completed: ${completedCount}`;

    if (tasksToRender.length === 0 && inputSearch.value.trim() !== "") {
    const emptyMessage = createDomElement('p', ['search-empty']);
    // Безопасное добавление текста через textContent защищает от XSS
    emptyMessage.textContent = `По запросу "${inputSearch.value}" ничего не найдено`;
    divTodoList.append(emptyMessage);
    return;
  }

    const fragment = document.createDocumentFragment();

    tasksToRender.forEach(({id, isChecked, text, date}) => {
    const divTask = createDomElement('div', ['task', 'container']);
    divTask.dataset.id = id;
    if (isChecked) divTask.classList.add('task_bg');

    const label = createDomElement('label', ['task__label']);
    if (isChecked) label.classList.add('label');
    
    const checkbox = createDomElement('input', ['task__checkbox']);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = isChecked;
    
    label.append(checkbox);

    const titleTask = createDomElement('h3', ['task__title']);
    titleTask.textContent = text;
    if (isChecked) titleTask.classList.add('title');

    const divInTask = createDomElement('div', ['task__inner-div']);
    const btnClose = createDomElement('button', ['btn', 'task__btn-close'], '×');
    const dateElement = createDomElement('p', ['task__date'], date);

    divInTask.append(btnClose, dateElement);
    divTask.append(label, titleTask, divInTask);
    fragment.append(divTask);
    });

    divTodoList.append(fragment);
}

// Первичный рендеринг при загрузке страницы
renderTodoTasks();

// --- ОБРАБОТЧИКИ СОБЫТИЙ ---

btnAdd.addEventListener('click', addTask);
divTodoList.addEventListener('change', toggleCheckbox);
divTodoList.addEventListener('click', deleteTaskCross);
btnDeleteLast.addEventListener('click', deleteLast);
btnDeleteAll.addEventListener('click', deleteAll);
btnShowCompleted.addEventListener('click', showCompleted);
btnShowAll.addEventListener('click', showAll);
inputSearch.addEventListener('input', makeSearch);

  
