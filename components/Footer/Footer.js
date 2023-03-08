import './Footer.css';

import footerTemplate from './FooterTemplate.js';

const footer = () => {
  const footerSection = document.querySelector('#footer');
  footerSection.innerHTML = footerTemplate(
    'NORBA BOX',
    'Calle Falsa 123',
    '10005 Cáceres',
    'FUERZA Y VALOR',
    '676 67 67 67',
    '#',
    'norbabox',
    'Graimi',
    'https://www.linkedin.com/in/floreslujan/',
    'https://github.com/Graimi'
  );
};

export default footer;
