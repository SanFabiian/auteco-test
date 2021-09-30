const Header = () => {
  const view = `
  <section class="content-wrap">
  <div class="header-menu">
    <a href="/" class="header-logo"
      ><img src="./src/images/logo.jpg" width="120" alt="Logo mi zapato"
    /></a>
      <nav class="header-nav">
        <details class="header-nav-list">
          <summary>
          <i class="fas fa-bars"></i>
        </summary>
        <ul>
            <li><a href="#categoria/hombres">Hombre</a></li>
            <li><a href="#">Mujer</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Historia</a></li>
            <li><a href="#">Tiendas</a></li>
          </ul>
        </details>
      </nav>
    </div>
    <div class="header-options">
      <div class="searcher input">
        <input type="text" placeholder="Buscar" />
        <button type="button"><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="shopping-cart">
        <p>Envío gratis para pedidos superiores a $300.000</p>
        <div class="shoppign-cart-icon">
          <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  </section>
`;
  return view;
};

export default Header;
