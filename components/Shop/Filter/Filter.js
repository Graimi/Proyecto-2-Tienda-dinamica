// Aquí añadimos el conjunto de los componentes del filter
import data from '../../../data/Data.js';
import products from '../Products/Products.js';
// import sellerDetails from './SellerMap.js';
import { filterTemplate, sellerTemplate } from './FilterTemplate.js';
import toggleFilter from './ToggleFilter.js';

// Añadimos el contenedor de los filtros
const filterSection = document.querySelector('#filter');
const filterContainer = document.createElement('div');
filterContainer.className = 'bc__section__filter';
filterSection.appendChild(filterContainer);
filterContainer.innerHTML += filterTemplate;

// Esta variable nos va a ayudar a que los valores no se superpongan y solo aparezcan los filtrados
let filteredData = [];

// Con esta función reiniciamos todo
const filter = () => {
  products(data);
};

// El toggle lo añadimos aquí para no evitar que se repita cada vez
toggleFilter();

const sellerDetails = (sellers) => {
  // const sellerContainer = document.createElement
  const sellerImgContainer = document.querySelector('.bc__filter__brand--img');
  // Usamos esta variable para almacenar las veces que aparece un vendedor
  const sellersCounter = [];
  for (const seller of sellers) {
    // Con el siguiente condicional indicamos que aparezca el siguiente template
    if (!sellersCounter.includes(seller.seller)) {
      sellerImgContainer.innerHTML += sellerTemplate({
        seller: seller.seller,
        sellerImg: seller.sellerImg
      });
      // Con esto hacemos añadimos el vendedor y evitamos que se repita
      sellersCounter.push(seller.seller);
    }
  }
};
sellerDetails(data);

// Declaramos la función modelo de filtrado
const filterFunction = (seller, info) => {
  return info.filter((item) => item.seller === seller);
};

// Seleccionamos los botones de los sellers
// Sería interesante saber interpolar nombres de variables para hacer automático los siguientes pasos
const venumButton = document.querySelector('#venum__button');
const everlastButton = document.querySelector('#everlast__button');
const leoneButton = document.querySelector('#leone__button');

// Empezamos con las funciones de filtrado
venumButton.addEventListener('click', () => {
  // Filtramos solo los datos que nos interesan y los almacenamos en filteredData
  filteredData = filterFunction('venum', data);
  products(filteredData);
});

everlastButton.addEventListener('click', () => {
  filteredData = filterFunction('everlast', data);
  products(filteredData);
});

leoneButton.addEventListener('click', () => {
  filteredData = filterFunction('leone', data);
  products(filteredData);
});

// Seleccionamos el botón para eliminar todos los filtros
const removeButton = document.querySelector('.bc__filter__remove--button');
removeButton.addEventListener('click', () => {
  filter();
});

export default filter();
