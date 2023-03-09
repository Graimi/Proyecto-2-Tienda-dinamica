import './Footer.css';

import footerTemplate from './FooterTemplate.js';

const footer = () => {
  const footerSection = document.querySelector('#footer');
  footerSection.innerHTML = footerTemplate({
    webName: 'NORBA BOX',
    address1: 'Calle Falsa 123',
    address2: '10005 Cáceres',
    slogan: 'FUERZA Y VALOR',
    phone: '676 67 67 67',
    instagramLink: '#',
    instagramUser: 'norbabox',
    author: 'Graimi',
    linkedinLink: 'https://www.linkedin.com/in/floreslujan/',
    githubLink: 'https://github.com/Graimi'
  });
};

export default footer;
