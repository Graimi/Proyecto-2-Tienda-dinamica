// Funciones para hacer toggle del seller, aplicar a cada una posteriormente
const imageOver = document.querySelector('.image__over');
const buttonSeller = document.querySelector('.bc__filter__brand--button');

// Declaramos esta variable que nos serirá de base para el estado del toggle
let state = true;

const toggleSeller = () => {
  if (state) {
    imageOver.style.display = 'inline';
    state = false;
  } else {
    imageOver.style.display = 'none';
    state = true;
  }
};

const addSeller = buttonSeller.addEventListener('click', toggleSeller);

export default addSeller;
