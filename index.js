const header = document.querySelector('.header')
const inputEL = header.querySelector('.header__input');
const btnEl = header.querySelector('.header__btn');
const errorMsg = document.querySelector('.header__error-msg');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const displayError = () => {
    errorMsg.style.display = 'block';
    inputEL.style.borderColor = 'red';
}

const removeError = () => {
    errorMsg.style.display = 'none';
    inputEL.style.borderColor = 'black';
}

const validateEmail = () => {
    if (!inputEL.value.match(emailRegex)) {
        displayError();
        return
    }
    removeError();
}

const initApp = () => {
    btnEl.addEventListener('click', () => {
        validateEmail();
    });
    
}

document.addEventListener('readystatechange', (e) => {
    if (e.target.readyStatechange = 'complete') {
        initApp();
    }
});