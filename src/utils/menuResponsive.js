const menuResponsive = () => {
  const menuDetails = document.querySelector(".header-nav details");
  if (window.matchMedia("(min-width: 768px)").matches) {
    /* La pantalla tiene al menos 400 píxeles de ancho */
    menuDetails.open = true;
  } else {
    /* La pantalla tiene menos de 400 píxeles de ancho */
    menuDetails.open = false;
  }
};

export default menuResponsive;
