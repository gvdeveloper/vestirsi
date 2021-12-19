import "../../styles.css"
import CardWidget from "../CardWidget/CardWidget.js"
import {Link} from "react-router-dom"
function NavBar() {
    return (
      <header>
        <section className="header contenedor">
          <Link to="/" className="logo">VESTIRSI</Link>

          <nav className="navbar" id="navbar">
            <Link to="/">Home</Link>
            <Link to="/">Zapatillas</Link>
            <a href="#mujer">Gorras</a>
            <a href="#accesorios">Carteras</a>
            <a href="#nosotros">Remeras</a>
            
          </nav>

          <div className="icons">
            <CardWidget />
            <div><span className="material-icons-round">account_circle</span></div>
            <div id="menu-toggle">
              <span className="material-icons-round">menu</span>
            </div>
          </div>
          <div id="carrito-menu"></div>
        </section>
      </header>
    );
}

export default NavBar;