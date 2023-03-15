import './Header.css';

import headerTemplate from './HeaderTemplate.js';

// Aquí añadimos el template del header
const headerSection = document.querySelector('#header');

headerSection.innerHTML += headerTemplate({
  webName: 'NORBA BOX',
  contactLink:
    'https://api.whatsapp.com/send?phone=34638560723&text=Hola!%20%C2%BFTienes%20alguna%20duda%20con%20los%20productos%3F'
});

// A partir de aquí creamos el código para la invisible navbar
const navBar = document.querySelector('.bc__section__header__layout');
const heroSection = document.querySelector('#hero');
const invisibleNav = () => {
  // No estoy seguro de por qué ha funcionado con .scrollY cuando debería ser con .scrollX, pura casualidad
  // Se ha añadido el 80 para que la navbar aparezca tan pronto como se mueva la venta para no superponer los datos
  if (window.scrollY * 80 > heroSection.offsetHeight) {
    navBar.style.backgroundColor = 'var(--bc__color--black)';
  }
  if (window.scrollY * 80 < heroSection.offsetHeight) {
    navBar.style.backgroundColor = 'transparent';
  }
};
const functionInvisibleNav = () => window.addEventListener('scroll', invisibleNav);

// Creamos la siguiente función para que no se vean en transparente las opciones cuando pinchemos en la hamburguesa
const hamburger = document.querySelector('.bc__hamburguer__label');
const hamburgerToggle = () => {
  navBar.style.backgroundColor = 'var(--bc__color--black)';
};

hamburger.addEventListener('click', hamburgerToggle);

export default functionInvisibleNav;
