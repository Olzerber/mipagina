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
/*---- TOGGLE MENU ----*/

/*---- Buscador ----*/
const iconSearch = document.getElementById('icon_search');
const inputSearch = document.querySelector('.nav_desktop_input');

iconSearch.addEventListener('click',()=> {
    inputSearch.classList.toggle('mostrar');
});

/*---- Dropdown ----*/
const dropdown = document.getElementById('dropdown')
const dropdownContent = document.querySelector('.dropdown_content')

dropdown.addEventListener('click', () =>{
    dropdownContent.classList.toggle('hidden');
})
/* ----Dropdown---- */

/*----Acordion----*/
let acordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acordion.length; i++) {
acordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*----Acordion----*/