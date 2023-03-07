// En este doc se ha añadido todo el contenido HTML de las tarjetas de los productos
const cardDetails = (products) => {
  // En el index se ha mantenido el ul por si posteriormente se alle algo además de las cards
  const ul = document.querySelector('.bc__section__shop');
  // Se ha usado un for of para acceder a cada uno de los objetos
  for (const product of products) {
    const li = document.createElement('list');
    li.className = 'bc__product';
    li.innerHTML = `<li class="bc__product">
    <article class="bc__product--card">
      <a
        href=${product.link}
        target="_blank"
        rel="noopener"
      >
        <div class="bc__card--details">
          <h2 class="bc__card--title">${product.name}</h2>
          <img
            class="bc__brand"
            src=${product.seller_img}
            alt="logo de la marca"
          />
          <img
            class="bc__product--image"
            src=${product.img}
            alt="foto de los guantes"
          />
          <div class="bc__card--body bc__layout__flex">
            <p>${product.price}€</p>
            <p>${product.size}oz</p>
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
    // SUUPER IMPORTANTE hacer este paso antes de salir del for of, una buena tarde perdida
    ul.appendChild(li);
  }
};

export default cardDetails;
