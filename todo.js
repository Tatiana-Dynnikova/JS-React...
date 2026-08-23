const fragment = document.createDocumentFragment();


const createDomElement = (tag, classes, text) => {
    const newElement = document.createElement(tag);

    if (typeof classes === String) {
        newElement.className(classes);
    } else {
        newElement.classList.add(`${classes[0]}`, `${classes[1]}`);
    }

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
 
const btnDeleteAll = createDomElement('button', ['btn'], 'Delete all');
divMain1.append(btnDeleteAll);

const btnDeleteLast = createDomElement('button', ['btn'], 'Delete last');
divMain1.append(btnDeleteLast);

const inputTask = createDomElement('input', ['input', 'main__input']);
inputTask.setAttribute('placeholder', 'Enter todo...')
divMain1.append(inputTask);

const btnAdd = createDomElement('button', ['btn'], 'Add');
divMain1.append(btnAdd);


const divMain2 = createDomElement('div', ['main', 'container']);
fragment.append(divMain2);

const spanCountAll = createDomElement('span', ['main__span'], `All: `);
divMain2.append(spanCountAll);

const spanEnded = createDomElement('span', ['main__span'], `Completed: `);
divMain2.append(spanEnded);

const btnShowAll = createDomElement('button', ['btn', 'main__btn2'], 'Show All');
divMain2.append(btnShowAll);

const btnShowCompleted = createDomElement('button', ['btn', 'main__btn2'], 'Show Completed');
divMain2.append(btnShowCompleted);

const inputSearch = createDomElement('input', ['main__input', 'main__input-search']);
inputSearch.setAttribute('placeholder', 'Search...')
divMain2.append(inputSearch);


const divTask = createDomElement('div', ['task', 'container']);
fragment.append(divTask);

const checkbox = createDomElement('input', ['task__checkbox']);
checkbox.setAttribute('type', 'checkbox');
divTask.append(checkbox);

const label = createDomElement('label', ['task__label']);
label.setAttribute('for','checkbox');
divTask.append(label);

const titleCheckbox = createDomElement('h3', ['task__title'], 'TODO text');
divTask.append(titleCheckbox);

const divInTask = createDomElement('div', ['task__inner-div']);
divTask.append(divInTask);

const btnClose = createDomElement('button', ['btn', 'task__btn-close']);
divInTask.append(btnClose);

const date = createDomElement('p', ['task__date'], 'Date');
divInTask.append(date);


const divRoot = document.getElementById('root');
divRoot.append(fragment)


