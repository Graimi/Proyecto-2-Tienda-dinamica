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
  // Se ha añadido el 90 para que la navbar aparezca antes de los productos y se vea mejor
  if (window.scrollY * 1.45 > heroSection.offsetHeight) {
    navBar.style.backgroundColor = '#191800';
  } else {
    navBar.style.backgroundColor = 'transparent';
  }
};

const functionInvisibleNav = window.addEventListener('scroll', invisibleNav);

export default functionInvisibleNav;
