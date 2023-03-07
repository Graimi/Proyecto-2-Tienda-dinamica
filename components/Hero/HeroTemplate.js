const heroTemplate = (logoLink, slogan, cta) => `<img
class="bc__hero__logo"
src=${logoLink}
alt="logo del gimnasio"
/>
<h1 class="bc__hero__description">${slogan}</h1>
<a href="#shop"><h3 class="bc__hero__CTA">${cta}</h3></a>
<a href="#shop"
><img
  class="bc__hero__next"
  src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/avance_avv0kn.png"
  alt="logo de desplazamiento"
/></a>`;

export default heroTemplate;
