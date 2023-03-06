const heroTemplate = `<img
class="bc__hero__logo"
src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677859413/ceres-box/norba_box_logo_zkru4d.png"
alt="logo del gimnasio"
/>
<h1 class="bc__hero__description">SÉ TU MEJOR VERSIÓN</h1>
<a href="#shop"><h3 class="bc__hero__CTA">DESCUBRE NUESTRA GAMA</h3></a>
<a href="#shop"
><img
  class="bc__hero__next"
  src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/avance_avv0kn.png"
  alt="logo de desplazamiento"
/></a>`;

const hero = () => {
  const heroSection = document.querySelector('#hero');
  heroSection.innerHTML += heroTemplate;
};

export default hero;
