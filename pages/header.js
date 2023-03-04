// Aquí añadimos el template del header
const headerSection = document.querySelector('#header');

headerSection.innerHTML += `<div class="bc__section__header__layout bc__layout__flex">
<a href="#header"> <h3 class="bc__header__logo">NORBA CERES</h3> </a>
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
        href="https://api.whatsapp.com/send?phone=34638560723&text=Hola!%20%C2%BFTienes%20alguna%20duda%20con%20los%20productos%3F"
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

// A partir de aquí creamos el código para la invisible navbar
const navBar = document.querySelector('.bc__section__header__layout');
const heroSection = document.querySelector('#hero');

const invisibleNav = () => {
  // No estoy seguro de por qué ha funcionado con .scrollY cuando debería ser con .scrollX, pura casualidad
  // Se ha añadido el 90 para que la navbar aparezca antes de los productos y se vea mejor
  if (window.scrollY + 90 > heroSection.offsetHeight) {
    navBar.style.backgroundColor = '#191800';
  } else {
    navBar.style.backgroundColor = 'transparent';
  }
};

const functionInvisibleNav = window.addEventListener('scroll', invisibleNav);

export default functionInvisibleNav;
