import { sellerTemplate } from './FilterTemplate.js';
import toggleSeller from './SellerFilter.js';

const sellerDetails = (sellers) => {
  const sellerImgContainer = document.querySelector('.bc__filter__brand--img');
  const sellersCounter = [];
  for (const seller of sellers) {
    if (!sellersCounter.includes(seller.seller)) {
      sellerImgContainer.innerHTML += sellerTemplate({
        seller: seller.seller,
        sellerImg: seller.sellerImg,
        tickImg:
          'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678204946/ceres-box/tick_oma3cc.png'
      });
      sellersCounter.push(seller.seller);
    }

    // const imageOver = document.querySelector('.image__over');
    // const sellerButton = document.querySelector('.bc__filter__brand--button');

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
    // const imageOverTemplate = `.image__over ${seller.seller}`;

    // const sellerButton = document.querySelector(`#${seller.seller}__button`);
    // const toggleSeller = () => {
    //   const imageOver = document.querySelector(`#${seller.seller}__tick`);
    //   let state = true;
    //   if (state) {
    //     imageOver.style.display = 'inline';
    //     state = false;
    //     console.log(imageOver);
    //   } else {
    //     imageOver.style.display = 'none';
    //     state = true;
    //     console.log(imageOver);
    //   }
    // };

    // sellerButton.addEventListener('click', toggleSeller);
  }
  toggleSeller();
  console.log(toggleSeller());
};

export default sellerDetails;
