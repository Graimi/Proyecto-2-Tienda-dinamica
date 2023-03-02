import prueba from '../../data/prueba.js';

// En este doc se ha añadido todo el contenido HTML de las tarjetas de los productos
// Los datos son de una fuente de prueba, hay que usar la completa
const cardDetails = `
<li class="bc__product">
<article class="bc__product--card">
  <a
    href=${prueba.link}
    target="_blank"
    rel="noopener"
  >
    <div class="bc__card--details">
      <h2 class="bc__card--title">${prueba.name}</h2>
      <img
        class="bc__brand"
        src=${prueba.brand_img}
        alt="logo de la marca"
      />
      <img
        class="bc__product--image"
        src=${prueba.img}
        alt="foto de los guantes"
      />
      <div class="bc__card--body bc__layout__flex">
        <p>${prueba.price}€</p>
        <p>${prueba.size}oz</p>
      </div>
    </div>
  </a>
  <button class="bc__card--button">
    <img
      class="bc__card--button__image"
      src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605854/ceres-box/carrito_vbscwz.png"
      alt="Logo de carrito de compra"
    />
  </button>
</article>
</li>`;

export default cardDetails;
