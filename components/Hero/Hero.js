import heroTemplate from './HeroTemplate.js';

const hero = () => {
  const heroSection = document.querySelector('#hero');
  heroSection.innerHTML += heroTemplate(
    'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677859413/ceres-box/norba_box_logo_zkru4d.png',
    'SÉ TU MEJOR VERSIÓN',
    'DESCUBRE NUESTRA GAMA'
  );
};

export default hero;
