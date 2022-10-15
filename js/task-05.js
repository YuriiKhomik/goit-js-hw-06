// отримуємо доступ до елементів

const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector("#name-output");

// додаємо івент лістенер на інпут і колбек для зміни аутпута
inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    titleEl.textContent = event.currentTarget.value;
}
