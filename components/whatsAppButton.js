const whatsAppTemplate = `<a
    href="https://api.whatsapp.com/send?phone=34638560723&text=Hola!%20%C2%BFTienes%20alguna%20duda%20con%20los%20productos%3F"
    target="_blank"
    rel="noopener"
  >
    <img
      class="bc__whatsApp__img"
      src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677608342/ceres-box/whatsapp_jysqgu.png"
      alt="logo de WhatsApp"
    />
  </a>`;

const whatsAppButton = () => {
  const whatsAppDiv = document.querySelector('.bc__button--whatsApp');
  whatsAppDiv.innerHTML += whatsAppTemplate;
};

export default whatsAppButton;
