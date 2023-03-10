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

export const priceTemplate = `<input
type="range"
name="priceRange"
id="priceRange"
class="bc__filter__price--input"
value="320"
oninput="rangevalue.value=value"
min="40"
max="320"
step="1"
/>
<div class="bc__filter__price--details">
<p>50€</p>
<output id="rangevalue">320</output>
<p>320€</p>
</div>`;

export const sellerTemplate = (seller) =>
  `<button type="button" class="bc__filter__brand--button" id="${seller.seller}__button">
<img
  class="image__seller"
  src=${seller.sellerImg}
  alt="Logo de la marca"
/>
</button>`;

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
