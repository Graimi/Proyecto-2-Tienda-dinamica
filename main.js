// import data from "./data/data.js";
import cardDetails from "./pages/shop/shop.js";

const shop = document.querySelector('#shop');

const products = (list) =>
  list.map((item) => ({
    name: item.name,
    brand: item.brand,
    brand_img: item.brand_img,
    img: item.img,
    price: item.price,
    size: item.size,
    link: item.link
  }));

// const glove = test(prueba);

// Prueba -------------

// Aquí insertamos las tarjetas de productos en la sección shop
shop.innerHTML += `<ul class="bc__section__shop bc__layout__flex"> ${cardDetails} </ul>`;
