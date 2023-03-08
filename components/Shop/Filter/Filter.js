// Aquí añadimos el conjunto de los componentes del filter
// import addSeller from './SellerFilter.js';
import data from '../../../data/Data.js';
import sellerDetails from './sellerMap.js';
import toggleFilter from './ToggleFilter.js';

// Para acceder a los datos del filtro intuyo que habrá que hacer un maps y for of de cada dato a recoger

// Con esta función lanzamos el resto de funciones
const filter = () => {
  sellerDetails(data);
  toggleFilter();

  // addSeller();
};

export default filter;
