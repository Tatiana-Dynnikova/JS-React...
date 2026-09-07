const fragment = document.createDocumentFragment();


const createDomElement = (tag, classes, text) => {
    const newElement = document.createElement(tag);

    for (let key of classes) {
        newElement.classList.add(key);
    }
    // if (typeof classes === String) {
    //     newElement.className(classes);
    // } else {
    //     newElement.classList.add(`${classes[0]}`, `${classes[1]}`);
    // }

    if (text) {
        newElement.textContent = text;
    }
        
    return newElement;
};


// НЕ РАБОТАЕТ =(
// const createDomElement = (tag, options) => {
//     const newElement = document.createElement(tag);

//     if (options.className) {
//         newElement.classList.add(options.className);
//     }

//     if (options.textContent) {
//         newElement.textContent = options.textContent;
//     }

//     if (options.setAttribute) {
//         newElement.setAttribute = options.setAttribute;
//     }
        
//     return newElement;
// };


// const divMain1 = createDomElement('div', {
//     className: 'main',
//     className: 'container' });
// divRoot.append(divMain1);

const divMain1 = createDomElement('div', ['main', 'container']);
fragment.append(divMain1);
 
const btnDeleteAll = createDomElement('button', ['btn', 'btn_delete-All'], 'Delete all');
divMain1.append(btnDeleteAll);

const btnDeleteLast = createDomElement('button', ['btn', 'btn_delete-Last'], 'Delete last');
divMain1.append(btnDeleteLast);

const inputTask = createDomElement('input', ['input', 'main__input']);
inputTask.setAttribute('placeholder', 'Enter todo...')
divMain1.append(inputTask);

const btnAdd = createDomElement('button', ['btn', 'btn_add'], 'Add');
divMain1.append(btnAdd);


const divMain2 = createDomElement('div', ['main', 'container']);
fragment.append(divMain2);

const spanCountAll = createDomElement('span', ['main__span'], `All: `);
divMain2.append(spanCountAll);

const spanEnded = createDomElement('span', ['main__span'], `Completed: `);
divMain2.append(spanEnded);

const btnShowAll = createDomElement('button', ['btn', 'main__btn2', 'btn_show-all'], 'Show All');
divMain2.append(btnShowAll);

const btnShowCompleted = createDomElement('button', ['btn', 'main__btn2', 'btn_completed'], 'Show Completed');
divMain2.append(btnShowCompleted);

const inputSearch = createDomElement('input', ['main__input', 'main__input-search']);
inputSearch.setAttribute('placeholder', 'Search...')
divMain2.append(inputSearch);

const divRoot = document.getElementById('root');
divRoot.append(fragment)

const divTodoList = createDomElement('div', ['container-tasks']);
divRoot.append(divTodoList);


btnAdd.addEventListener('click', function() {

    const fragment = document.createDocumentFragment();

    const divTask = createDomElement('div', ['task', 'container']);
    fragment.append(divTask);

    const label = createDomElement('label', ['task__label']);
    label.setAttribute('for', 'checkbox');
    divTask.append(label);

    const checkbox = createDomElement('input', ['task__checkbox']);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checkbox');
    label.append(checkbox);

    const titleTask = createDomElement('h3', ['task__title']);
    titleTask.textContent = inputTask.value;
    divTask.append(titleTask);

    const divInTask = createDomElement('div', ['task__inner-div']);
    divTask.append(divInTask);

    const btnClose = createDomElement('button', ['btn', 'task__btn-close']);
    divInTask.append(btnClose);

    const date = createDomElement('p', ['task__date']);
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    date.textContent = formattedDate;
    divInTask.append(date);

    inputTask.value = '';

    divTodoList.append(fragment);
});


btnDeleteLast.addEventListener('click', () => {
    const items = document.querySelectorAll('.task');
    if (items.length > 0) {
        items[items.length - 1].remove();
    }
});


btnDeleteAll.addEventListener('click', () => {
    const items = document.querySelectorAll('.task');
    for (let item of items) {
            item.remove();
    }
});


divTodoList.addEventListener('click', (event) => {

    const buttonClose = event.target.closest('.task__btn-close');
    if (!buttonClose) {
        return;
    }

    const task = buttonClose.closest('.task');
    if (!task) {
        return;
    }

    task.remove();
});


divTodoList.addEventListener('change', (event) => {

    const currentLabel = event.target.closest('.task__label');

    if (!currentLabel) {
            return;
        }

    const task = currentLabel.closest('.task');
        if (!task) {
            return;
        }
    
    currentLabel.classList.toggle('label');

    const isChangeTask = document.querySelector('.task');
    isChangeTask.classList.toggle('task_bg');

    const isChangeTitle = document.querySelector('.task__title');
    isChangeTitle.classList.toggle('title');

});


// const ListTodoTasks = document.querySelector('.container-tasks')

// ListTodoTasks.addEventListener('change', (event) => {
//     if (event.target.classList.contains('.task__checkbox')) {

//         const isChecked = event.target.checked;

//         const taskLabel = event.target.closest('.task__label')
//         const taskItem = event.target.closest('.task');
//         const taskTitle = event.target.closest('.task__title')
//     }
    
//     if (isChecked) {    
//         taskLabel.classList.toggle('label')

//         taskItem.classList.toggle('task_bg');

//         taskTitle.classList.toggle('title');
//     }

// });



const todoLSKey = 'todos';
const todos = [];

function getDate(todoLSKey) {
    let getLSValue = localStorage.getItem(todoLSKey);

    if (!getLSValue) {
      return [];
    }

    try {
        return JSON.parse(getLSValue);
    } catch (error) {
        console.error('Parsing error:', error);
        return [];
    }
}

function setDate(todoLSKey, todos) {
    todos = JSON.stringify(todos);

    try {
        localStorage.setItem(todoLSKey, todos);
    } catch (error) {
        console.error('Stringify error:', error);
        return {};
    }
}

// let gettodoTasks = getDate(todoLSKey);


function getCurrentFormattDate() {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        day: 'numeric',
        month: 'short'
    });

    // Форматируем дату и переводим месяц в нижний регистр
    const formatterDate = formatter.format(now).toLowerCase().replace(',', '');
    return formatterDate;
}

function render(todos) {
    todos.forEach((todo) => {
        todo.id = crypto.randomUUID();
        todo.text = input.value;
        todo.date = formatterDate();
        todo.isComplited = checkbox.value;

    return todos;
    });
}


function addTodoLS() {

    let textTodo = document.querySelector('.task__title')
    let checkbox = document.getElementById('checkbox');

    if (checkbox.checked) {
        newTodo.isChecked = true;
    }

    const newTodo = {
        id: crypto.randomUUID().substr(2, 5),
        date: getCurrentFormattDate(),
        text: textTodo.textContent,
        isChecked: false,
    }

    todos.push(newTodo);
    setDate(todoLSKey, todos);

    return;
}

btnAdd.addEventListener('click', function() {
    getDate(todoLSKey);
    addTodoLS();
});








