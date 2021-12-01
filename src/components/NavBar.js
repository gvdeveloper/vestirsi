function NavBar() {
    return (
        <section class="header contenedor">
        <a href="#" className="logo"> VESTIRSI </a>

        <nav className="navbar" id="navbar">
          <a href="">HOME</a>
          <a href="">HOMBRE</a>
          <a href="">MUJER</a>
          <a href="">ACCESORIOS</a>
          <a href="">NOSOTROS</a>
          <a href="">CONTACTO</a>
        </nav>

        <div className="icons">
          <div id="carrito-toggle">
            <span className="material-icons-round">shopping_cart</span>
          </div>
          <div><span className="material-icons-round">account_circle</span></div>
          <div id="menu-toggle">
            <span className="material-icons-round">menu</span>
          </div>
        </div>

        <div id="carrito-menu"></div>
      </section>
    );
}

export default NavBar;