const header = document.querySelector('.header')
const inputEL = header.querySelector('.header__input');
const btnEl = header.querySelector('.header__btn');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmail = () => {
    if (btnEl.value.match(emailRegex)) return

    let p = document.createElement('p');
    p.textContent = 'Please provide a valid email'
    header.appendChild(p);

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