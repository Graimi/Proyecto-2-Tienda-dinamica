// Aquí añadimos el conjunto de los componentes del filter
import data from '../../../data/Data.js';
import products from '../Products/Products.js';
// import sellerFilters from './SellerMap.js';
import { filterTemplate, priceTemplate, sellerTemplate } from './FilterTemplate.js';
import toggleFilter from './ToggleFilter.js';

// Añadimos el contenedor de los filtros
const filterSection = document.querySelector('#filter');
const filterContainer = document.createElement('div');
filterContainer.className = 'bc__section__filter';
filterSection.appendChild(filterContainer);
filterContainer.innerHTML += filterTemplate;

// Estas variables nos va a ayudar a que los valores no se superpongan y solo aparezcan los filtrados
let filteredData = [];
// let filteredSellers = [];
// let filteredPrice = [];
// let filteredSize = [];

// Función reset price para que el precio de los artículos se actualice cuando cambiamos de filtro
const resetPrice = () => {
  rangeValue.innerText = maxPrice;
  rangeInput.value = maxPrice;
};

// Con esta función reiniciamos todo
const filter = () => {
  // Con esta primera función reiniciamos todos los productos
  products(data);
};

// El toggle lo añadimos aquí para no evitar que se repita cada vez
toggleFilter();

// ⭐ FILTRO SELLER
// Añadimos y ejecutamos el filtro por vendedor
const sellerFilters = (list) => {
  // const sellerContainer = document.createElement
  const sellerImgContainer = document.querySelector('.bc__filter__brand--img');
  // Usamos esta variable para almacenar las veces que aparece un vendedor
  const sellersCounter = [];
  for (const details of list) {
    // Con el siguiente condicional indicamos que aparezca el siguiente template
    if (!sellersCounter.includes(details.seller)) {
      sellerImgContainer.innerHTML += sellerTemplate({
        seller: details.seller,
        sellerImg: details.sellerImg
      });
      // Con esto hacemos añadimos el vendedor y evitamos que se repita
      sellersCounter.push(details.seller);
    }
  }
};
sellerFilters(data);

// Declaramos la función modelo de filtrado
const filterFunction = (seller, info) => {
  return info.filter((item) => item.seller === seller);
};

// Seleccionamos los botones de los sellers
// Sería interesante saber interpolar nombres de variables para hacer automático los siguientes pasos
const venumButton = document.querySelector('#venum__button');
const everlastButton = document.querySelector('#everlast__button');
const leoneButton = document.querySelector('#leone__button');

// Empezamos con las funciones de filtrado de los sellers
venumButton.addEventListener('click', () => {
  // Filtramos solo los datos que nos interesan y los almacenamos en filteredSellers
  // filteredSellers = filterFunction('venum', data);
  // products(filteredSellers);
  filteredData = filterFunction('venum', data);
  products(filteredData);
  // Con el reset conseguimos resetear el precio cuando se seleccione otro seller
  resetPrice();
  // Ponemos el valor por defecto del select al cambiar el seller
  sizeSelect.value = 'hide';
});

everlastButton.addEventListener('click', () => {
  // filteredSellers = filterFunction('everlast', data);
  // products(filteredSellers);
  filteredData = filterFunction('everlast', data);
  products(filteredData);
  resetPrice();
  sizeSelect.value = 'hide';
});

leoneButton.addEventListener('click', () => {
  // filteredSellers = filterFunction('leone', data);
  // products(filteredSellers);
  filteredData = filterFunction('leone', data);
  products(filteredData);
  resetPrice();
  sizeSelect.value = 'hide';
});

// ⭐ FILTRO PRICE
// Añadimos estas dos funciones como contenedores de valores
// Es importante que juguemos con infinity para que no tengamos problemas con las cantidades
let maxPrice = -Infinity;
let minPrice = Infinity;
// Añadimos y ejecutamos el filtro por precio
const priceFilter = (list) => {
  // A diferencia del caso anterior, en este declaramos únicamente los valores máximos y mínimos con el for of para aplicarlos directamente al template
  for (const details of list) {
    if (details.price > maxPrice) {
      maxPrice = details.price;
    } else if (details.price < minPrice) {
      minPrice = details.price;
    }
  }
  // Ahora que ya tenemos los valores los aplicamos al template
  const priceContainer = document.querySelector('.bc__filter__price');
  priceContainer.innerHTML += priceTemplate({
    max: maxPrice,
    min: minPrice
  });
};
priceFilter(data);

// Declaramos la función modelo de filtrado para el precio
const filterPriceFunction = (price, info) => {
  return info.filter((item) => item.price <= price);
};

const rangeInput = document.querySelector('#priceRange');
const rangeValue = document.querySelector('#rangevalue');
rangeInput.addEventListener('input', (price) => {
  // filteredPrice = filterPriceFunction(price.target.value, data);
  // products(filteredPrice);
  filteredData = filterPriceFunction(price.target.value, data);
  products(filteredData);
  // Ponemos el valor por defecto del select al cambiar el precio
  sizeSelect.value = 'hide';
});

// ⭐ FILTRO SIZE
const sizeContainer = document.querySelector('.bc__filter__size');
sizeContainer.innerHTML += `<select name="sizeSelect" id="sizeSelect">
<option id=hidden value="hide" hidden data-text="Elige">Elige</option></select>`;
const sizeSelect = document.querySelector('#sizeSelect');
// Creamos la función para filtrar los productos por talla
const sizeFilter = (list) => {
  // Usamos esta constante para almacenar los valores
  const sizeCounter = [];
  for (const details of list) {
    if (!sizeCounter.includes(details.size)) {
      sizeCounter.push(details.size);
      sizeCounter.sort();
      sizeSelect.innerHTML += `<option value="${details.size}">${details.size}oz</option>`;
    }
  }
  // console.log(sizeCounter.map());
  // sizeCounter.map(
  //   (size) => (sizeSelect.innerHTML += `<option value="${size}">${size}oz</option>`)
  // );
  // sizeCounter.sort();
};
sizeFilter(data);

// sizeContainer.innerHTML += `<select name="sizeSelect" id="sizeSelect">
//             <option value="hide">Elige</option>
//             <option value="8oz">8oz</option>
//           </select>`;

const filterSizeFunction = (size, info) => {
  return info.filter((item) => item.size == size);
};

sizeSelect.addEventListener('input', (size) => {
  // filteredSize = filterSizeFunction(size.target.value, data);
  // products(filteredSize);
  filteredData = filterSizeFunction(size.target.value, data);
  products(filteredData);
});

// PROBAR PONIENDO SOLO FILEREDSELLERS

// ⭐ Botón remove
// Seleccionamos el botón para eliminar todos los filtros
const removeButton = document.querySelector('.bc__filter__remove--button');
removeButton.addEventListener('click', () => {
  // Al hacer mención al filter reiniciamos los productos
  filter();
  // Con la siguiente reiniciamos el valor del input al máximo de los productos
  resetPrice();
  // Con esta ponemos el valor por defecto del select al reiniciar
  sizeSelect.value = 'hide';
});

export default filter();
