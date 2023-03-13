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

  const hideFilter = () => {
    // Buscamos los contenedores
    const filterContainer = document.querySelector('.bc__section__filter');
    const toggleImage = document.querySelector('.bc__filter__toggle--image');
    if (state) {
      // Usamos la función toggle para aplicar estilos específicos definidos en css al cambiar la clase
      toggleImage.classList.toggle('hidden__toggle');
      filterContainer.classList.toggle('hidden__filter');
      state = false;
    } else {
      // Devolvemos los estilos orginales
      toggleImage.classList.toggle('hidden__toggle');
      filterContainer.classList.toggle('hidden__filter');
      state = true;
    }
  };

  // Invocamos al event listener
  toggleFilterButton.addEventListener('click', hideFilter);
};

export default toggleFilter;
