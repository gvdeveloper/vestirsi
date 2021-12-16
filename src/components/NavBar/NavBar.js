import "../../styles.css"
import CardWidget from "../CardWidget/CardWidget.js"
/* import {Link} from "react-router-dom" */
function NavBar() {
    return (
      <header>
        <section className="header contenedor">
          <a href="#" className="logo"> VESTIRSI </a>

          <nav className="navbar" id="navbar">
            {/* <a><Link to={`/Prueba1`}>HOME</Link></a> */}
            <a href="#home">HOME</a>
            <a href="#hombre">HOMBRE</a>
            <a href="#mujer">MUJER</a>
            <a href="#accesorios">ACCESORIOS</a>
            <a href="#nosotros">NOSOTROS</a>
            <a href="#contacto">CONTACTO</a>
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