const toggleSeller = () => {
  // Funciones para hacer toggle del seller, aplicar a cada una posteriormente
  // const buttonSeller = document.querySelector(`#${seller}__button`);
  const buttonSeller = document.querySelector('.bc__filter__brand--button');

  const imageOver = document.querySelector('.image__over');

  const toggleFunction = () => {
    // Declaramos esta variable que nos serirá de base para el estado del toggle
    let state = false;
    if (state) {
      imageOver.style.display = 'inline';
      state = false;
    } else {
      imageOver.className('.image__over');
      state = true;
    }
  };
  buttonSeller.addEventListener('click', toggleFunction);
};

export default toggleSeller;

// // Funciones para hacer toggle del seller, aplicar a cada una posteriormente
// const imageOver = document.querySelector('.image__over'.seller.seller);
// const buttonSeller = document.querySelector('.bc__filter__brand--button'.seller.seller);

// // Declaramos esta variable que nos serirá de base para el estado del toggle
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

// const addSeller = buttonSeller.addEventListener('click', toggleSeller);

// export default addSeller;
