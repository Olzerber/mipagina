/* TOGGLE MENU */

const btnMobile = document.getElementById('btn-mobile');
const navMobile = document.querySelector('.nav_mobile');

btnMobile.addEventListener('click', () => {
  navMobile.classList.toggle('show');
});
/*----------------------END TOGGLE MENU */

/* DROPDOWN MENU  */
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownContent = dropdownMenu.querySelector('.dropdown_content');
const dropdownToggle = dropdownMenu.querySelector('.dropdown-toggle');
const dropdownLinks = dropdownContent.querySelectorAll('a');

dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault(); // Evita que el enlace se abra
  dropdownContent.classList.toggle('active');
});

// Detener la propagación del evento click en los enlaces dentro del menú desplegable
dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.stopPropagation();
    // Aquí puedes agregar cualquier otra lógica que desees para los enlaces individuales
  });
});
/*----------------------END DROPDOWN MENU */