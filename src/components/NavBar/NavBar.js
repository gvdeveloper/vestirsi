import "../../styles.css";
import CardWidget from "../CardWidget/CardWidget.js";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <section className="header contenedor">
        <Link to="/" className="logo">
          VESTIRSI
        </Link>

        <nav className="navbar" id="navbar">
          <Link to="/">Home</Link>
          <Link to="/category/Zapatillas">Zapatillas</Link>
          <Link to="/category/Gorras">Gorras</Link>
          <Link to="/category/Carteras">Carteras</Link>
          <Link to="/category/Remeras">Remeras</Link>
        </nav>

        <div className="icons">
          <CardWidget />
          <div>
            <span className="material-icons-round">account_circle</span>
          </div>
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
