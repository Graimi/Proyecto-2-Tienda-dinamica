import filter from './Filter/Filter.js';
import products from './Products/Products.js';

// Desde aquí lanzamos todas las funciones de la tienda
const shop = () => {
  products();
  filter();
};

export default shop;
