// En esta página se han añadido los componentes de shop
import './Products.css';

import cardsTemplate from './CardsTemplate.js';

// En esta función se ha añadido todo el contenido HTML de las tarjetas de los productos
const products = (listProducts) => {
  // En el index se ha mantenido el ul por si posteriormente se alle algo además de las cards
  const ul = document.querySelector('.bc__section__shop');
  // Se ha usado un for of para acceder a cada uno de los objetos
  for (const product of listProducts) {
    const li = document.createElement('list');
    li.className = 'bc__product';
    // li.innerHTML = cardsTemplate(product);
    li.innerHTML = cardsTemplate({
      link: product.link,
      name: product.name,
      sellerImg: product.sellerImg,
      productImg: product.productImg,
      price: product.price,
      size: product.size
    });
    // SUUPER IMPORTANTE hacer este paso antes de salir del for of, una buena tarde perdida
    ul.appendChild(li);
  }
};

export default products;
