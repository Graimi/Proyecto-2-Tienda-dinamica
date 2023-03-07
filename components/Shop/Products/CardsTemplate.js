const cardsTemplate = (link, name, sellerImg, productImg, price, size) => `<li class="bc__product">
<article class="bc__product--card">
  <a
    href=${link}
    target="_blank"
    rel="noopener"
  >
    <div class="bc__card--details">
      <h2 class="bc__card--title">${name}</h2>
      <img
        class="bc__brand"
        src=${sellerImg}
        alt="logo de la marca"
      />
      <img
        class="bc__product--image"
        src=${productImg}
        alt="foto de los guantes"
      />
      <div class="bc__card--body bc__layout__flex">
        <p>${price}€</p>
        <p>${size}oz</p>
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

export default cardsTemplate;
