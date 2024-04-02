/* TOGGLE MENU */
const btnMobile = document.getElementById('btn-mobile');
const navMobile = document.querySelector('.nav_mobile');
const iconClose = document.getElementById('close-icon');

btnMobile.addEventListener('click', () => {
    navMobile.classList.toggle('show');
});

iconClose.addEventListener('click', () => {
    navMobile.classList.remove('show');
});

