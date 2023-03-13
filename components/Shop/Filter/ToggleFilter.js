import { toggleFilterTemplate } from './FilterTemplate.js';

// En este documento crearemos las funciones pertinentes del toggle del filtro haciendo que este aparezca y desaparezca
// Función para cambiar entre los estados del filter y aplicar sus respectivos valores y estilos
const toggleFilter = () => {
  const filterSection = document.querySelector('#filter');
  filterSection.innerHTML += toggleFilterTemplate(
    'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678105109/ceres-box/toggle_white_o1rnib.png'
  );
  const toggleFilterButton = document.querySelector('.bc__filter__toggle--button');

  // Declaramos esta variable que nos serirá de base para el estado del toggle
  let state = true;

  // Estilos del filtro cuando está abierto
  const trueStyles = (e) => {
    e.style.width = '15rem';
    e.style.writingMode = 'horizontal-tb';
    e.style.padding = 'var(--bc__padding--big)';
  };

  // const falseTemplate = `<h3>FILTROS</h3>`;
  // Estilos del filtro cuando está cerrado
  const falseStyles = (e) => {
    e.style.width = '4.5rem';
    e.style.writingMode = 'vertical-rl';
    e.style.textOrientation = 'upright';
    e.style.padding = '0.5rem';
  };

  const hideFilter = () => {
    const filterContainer = document.querySelector('.bc__section__filter');
    const toggleImage = document.querySelector('.bc__filter__toggle--image');
    if (state) {
      // falseStyles(filterContainer);
      toggleImage.style.transform = 'rotate(180deg)';
      filterContainer.classList.toggle('hidden');
      state = false;
    } else {
      // trueStyles(filterContainer);
      toggleImage.style.transform = 'rotate(0deg)';
      filterContainer.classList.toggle('hidden');
      state = true;
    }
  };

  // Invocamos al event listener
  toggleFilterButton.addEventListener('click', hideFilter);
};

export default toggleFilter;
