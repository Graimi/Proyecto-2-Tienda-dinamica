const headerTemplate = (
  webName,
  contactLink
) => `<div class="bc__section__header__layout bc__layout__flex">
<a href="#hero"> <h3 class="bc__header__logo">${webName}</h3> </a>
<!--  HAMBURGUER -->
<label class="bc__hamburguer__label" for="hamburger">&#9776;</label>
<input type="checkbox" name="bc__hamburguer" class="bc__hamburguer" id="hamburger" />
<!--  NAVIGATOR -->
<nav class="bc__section__navbar">
  <ul class="bc__navbar__header bc__layout__flex">
    <li>
      <a class="bc__navbar__inicio" href="#hero">Inicio</a>
    </li>
    <li>
      <a class="bc__navbar__shop" href="#shop">Tienda</a>
    </li>
    <li>
      <a
        href=${contactLink}
        target="_blank"
        class="bc__contact__button"
      >
        <span class="bc__contact__text--plain">&nbsp;contacto&nbsp;</span>
        <span class="bc__contact__text--hover" aria-hidden="true"
          >&nbsp;contacto&nbsp;</span
        >
      </a>
    </li>
  </ul>
</nav>
</div>
`;

export default headerTemplate;
