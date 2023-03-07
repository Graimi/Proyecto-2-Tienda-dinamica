import cardsTemplate from './CardsTemplate.js';

// En este doc se ha añadido todo el contenido HTML de las tarjetas de los productos
const cardDetails = (products) => {
  // En el index se ha mantenido el ul por si posteriormente se alle algo además de las cards
  const ul = document.querySelector('.bc__section__shop');
  // Se ha usado un for of para acceder a cada uno de los objetos
  for (const product of products) {
    const li = document.createElement('list');
    li.className = 'bc__product';
    // li.innerHTML = cardsTemplate(product);
    li.innerHTML = cardsTemplate(
      product.link,
      product.name,
      product.sellerImg,
      product.productImg,
      product.price,
      product.size
    );
    // SUUPER IMPORTANTE hacer este paso antes de salir del for of, una buena tarde perdida
    ul.appendChild(li);
  }
};

export default cardDetails;
