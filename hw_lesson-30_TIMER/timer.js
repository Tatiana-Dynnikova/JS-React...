const btnStart = document.querySelector('.start');
const btnEnd = document.querySelector('.end');
const timer = document.querySelector('.time');

let counter = 0;
let timerId = null;

btnStart.addEventListener('click', () => {
    // 2. Защита от повторных нажатий: если таймер уже запущен, ничего не делаем
    if (timerId !== null) return;

    timerId = setInterval(() => {
        counter++;
        console.log(counter);
        timer.textContent = counter + ' sec';

        if (counter < 10) {
            timer.textContent = '0' + counter + ' sec';
        } else {
            timer.textContent = counter + ' sec';
        }
    }, 1000);  
});

btnEnd.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
});


