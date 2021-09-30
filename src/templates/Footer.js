const Footer = () => {
  const view = `
  <section class="social-media">
  <h3>@mizapato</h3>
  <div>
    <a href="https://facebook.com" target="_blank"
      ><i class="fab fa-facebook-f"></i
    ></a>
    <a href="https://facebook.com" target="_blank"
      ><i class="fab fa-instagram"></i
    ></a>
  </div>
</section>
<section class='contact content-wrap'>
        <div class="footer-services">
        <h3>Servicio al cliente</h3>
        <ul>
          <li><a href="#">Contáctanos</a></li>
          <li><a href="#">Cambios y devoluciones</a></li>
          <li><a href="#">Políticas de la tienta</a></li>
          <li><a href="#">Política de datos</a></li>
        </ul>
      </div>
      <div class="footer-user">
        <h3>Servicio al cliente</h3>
        <ul>
          <li><a href="#">Mis pedidos</a></li>
          <li><a href="#">Mis devoluciones</a></li>
        </ul>
      </div>
      <div class="footer-utils">
        <h3>Servicio al cliente</h3>
        <ul>
          <li><a href="#">tiendas</a></li>
          <li><a href="#">devoluciones</a></li>
        </ul>
      </div>
      <div class="footer-newslatter">
        <h3>Newslatter</h3>
        <form>
          <label for="name-newslatter"
            >Regístrate para ser el primero en recibir nuestras noticias</label
          >
          <div class="input">
            <input type="mail" name="name-newslatter" placeholder="e-mail" />
            <button type="button">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </form>
      </div>
      </section>
    `;
  return view;
};

export default Footer;
