import { sellerTemplate } from './FilterTemplate.js';

const sellerDetails = (sellers) => {
  const sellerImgContainer = document.querySelector('.bc__filter__brand--img');
  const counterSellers = [];
  for (const seller of sellers) {
    if (!counterSellers.includes(seller.seller)) {
      sellerImgContainer.innerHTML += sellerTemplate(
        seller.sellerImg,
        'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678204946/ceres-box/tick_oma3cc.png'
      );
      counterSellers.push(seller.seller);
    }

    // const imageOver = document.querySelector('.image__over');
    // const buttonSeller = document.querySelector('.bc__filter__brand--button');

    // let state = true;

    // const toggleSeller = () => {
    //   if (state) {
    //     imageOver.style.display = 'inline';
    //     state = false;
    //   } else {
    //     imageOver.style.display = 'none';
    //     state = true;
    //   }
    // };

    // buttonSeller.addEventListener('click', toggleSeller);
  }
};

export default sellerDetails;
