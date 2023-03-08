// Declaramos aquí el template del filtro
export const filterTemplate = `<div class="bc__filter__brand"><h2>Marca</h2></div>
<div class="bc__filter__price"><h2>Precio</h2></div>
<div class="bc__filter__size"><h2>Tamaño</h2></div>
<div class="bc__filter__remove">
  <button class="bc__filter__remove--button">
    <h3 class="bc__filter__remove--text">Borrar filtros</h3>
  </button>
</div>`;

export const sellerTemplate = (sellerImg, tickImg) =>
  `<button type="button" class="bc__filter__brand--button">
<img
  class="image__seller"
  src=${sellerImg}
  alt="Logo de la marca"
/>
<img
  class="image__over"
  src=${tickImg}
  alt="Imagen del tick"
/>
</button>`;

export default filterTemplate;
