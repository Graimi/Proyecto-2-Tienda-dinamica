import { filterTemplate } from './FilterTemplate.js';

// En este documento crearemos las funciones pertinentes del toggle del filtro haciendo que este aparezca y desaparezca
// Función para cambiar entre los estados del filter y aplicar sus respectivos valores y estilos
const toggleFilter = () => {
  const toggleFilterButton = document.querySelector('.bc__filter__toggle--button');

  // Declaramos esta variable que nos serirá de base para el estado del toggle
  let state = true;

  // Invocamos el template del filtro
  const trueTemplate = filterTemplate;
  // Estilos del filtro cuando está abierto
  const trueStyles = (section) => {
    section.style.width = '15rem';
    section.style.writingMode = 'horizontal-tb';
    section.style.color = 'var(--bc__color--black)';
  };

  const falseTemplate = `<h3>FILTROS</h3>`;
  // Estilos del filtro cuando está cerrado
  const falseStyles = (section) => {
    section.style.width = '5rem';
    section.style.writingMode = 'vertical-rl';
    section.style.textOrientation = 'upright';
    section.style.color = 'var(--bc__color--black)';
  };

  const hideFilter = () => {
    const filterSection = document.querySelector('.bc__section__filter');
    const toggleImage = document.querySelector('.bc__filter__toggle--image');
    if (state) {
      falseStyles(filterSection);
      filterSection.innerHTML = falseTemplate;
      toggleImage.style.transform = 'rotate(180deg)';
      state = false;
    } else {
      trueStyles(filterSection);
      filterSection.innerHTML = trueTemplate;
      toggleImage.style.transform = 'rotate(0deg)';
      state = true;
    }
  };

  // Invocamos al event listener
  toggleFilterButton.addEventListener('click', hideFilter);
};

export default toggleFilter;
