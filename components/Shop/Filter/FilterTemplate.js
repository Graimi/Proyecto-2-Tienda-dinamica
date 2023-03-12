// Declaramos aquí el template del filtro
export const filterTemplate = `<h1 class="bc__filter__title" >FILTROS</h1>
<div class="bc__filter__brand">
<h2>Marca</h2>
<div class="bc__filter__brand--img"></div>
</div>
<div class="bc__filter__price"><h2>Precio</h2></div>
<div class="bc__filter__size"><h2>Tamaño</h2></div>
<div class="bc__filter__remove">
<button class="bc__filter__remove--button">Borrar filtros</button>`;

export const priceTemplate = (price) => `<input
type="range"
name="priceRange"
id="priceRange"
class="bc__filter__price--input"
// Valor con el que empezamos por defecto
value=${price.max}
oninput="rangevalue.value=value"
min="${price.min}"
max="${price.max}"
step="1"
/>
<div class="bc__filter__price--details">
<p>${price.min}€</p>
<output id="rangevalue">${price.max}</output>
<p>${price.max}€</p>
</div>`;

export const sellerTemplate = (seller) =>
  `<button type="button" class="bc__filter__brand--button" id="${seller.seller}__button">
<img
  class="image__seller"
  src=${seller.sellerImg}
  alt="Logo de la marca"
/>
</button>`;

export const sizeOptionTemplate = (size) =>
  `<option value="${size}">${size}oz</option>`;

export const sizeSelectTemplate = `<select name="sizeSelect" id="sizeSelect">
<option id="hidden" value="hide" hidden data-text="Elige">Elige</option>
</select>`;

export const toggleFilterTemplate = (img) => `<div class="bc__filter__toggle">
<button class="bc__filter__toggle--button">
  <img
    class="bc__filter__toggle--image"
    src= ${img}
    alt="toggle filtro"
  />
</button>
</div>`;

export default filterTemplate;
