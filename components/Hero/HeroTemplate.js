const heroTemplate = (hero) => `<img
class="bc__hero__logo"
src=${hero.logoLink}
alt="logo del gimnasio"
/>
<h1 class="bc__hero__description">${hero.slogan}</h1>
<a href="#next"><h3 class="bc__hero__CTA">${hero.cta}</h3></a>
<a href="#next"
><img
  id="next"
  class="bc__hero__next"
  src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/avance_avv0kn.png"
  alt="logo de desplazamiento"
/></a>`;

export default heroTemplate;
