const footerTemplate = (footer) => `<section class="bc__footer__web">
<section class="bc__footer__location bc__layout__flex">
  <div class="bc__location__address">
    <p>
      ${footer.webName}<br/>
      ${footer.address1}<br/>
      ${footer.address2}
    </p>
  </div>
  <img
    class="bc__location__img"
    src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/location_oy3ano.png"
    alt="icono de location"
  />
</section>
<section class="bc__footer__slogan">
  <h3 class="bc__slogan__boxer">${footer.webName}</h3>
  <h3 class="bc__slogan__text">${footer.slogan}</h3>
</section>
<section class="bc__footer__contact">
  <div class="bc__contact__phone bc__layout__flex">
    <img
      src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/phone_su2rtx.png"
      alt="icono de movil"
    />
    <p>${footer.phone}</p>
  </div>
  <div class="bc__contact__instagram bc__layout__flex">
    <a target="_blank" href="${footer.instagramLink}">
      <img
        src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/instagram_nfyr4h.png"
        alt="icono de Instagram"
      />
    </a>
    <p>${footer.instagramUser}</p>
  </div>
</section>
</section>
<section class="bc__footer__author">Hecho con ❤ por ${footer.author}</section>
<section class="bc__author__social">
<a
  class="bc__social__linkedin"
  target="_blank"
  href=${footer.linkedinLink}
  rel="noopener"
>
  <img
    src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/linkedin_r0jy7b.png"
    alt="icono de Linkedin"
  />
</a>
<a
  class="bc__social__github"
  target="_blank"
  href=${footer.githubLink}
  rel="noopener"
>
  <img
    src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/github_iq58vt.png"
    alt="icono de Github"
  />
</a>
</section>`;

export default footerTemplate;
