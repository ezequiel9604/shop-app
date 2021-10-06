import { Link } from "react-router-dom";

import "./css-styles/styles.css";

function Footer(props) {
    return (
        <footer>
          <div className="footer-top">
            <ul>
              <h5>Acerca de Nosotros</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                est quo dolore animi recusandae harum magni, hic eos debitis quas
                sint ex quibusdam velit officiis aspernatur nisi.
              </p>
              <strong>
                <span className="material-icons-outlined">call</span>{" "}
                <label>Tel:809-111-0000</label>
              </strong>
              <strong>
                <span className="material-icons-outlined">email</span>{" "}
                <label>zigzol@gmail.com</label>
              </strong>
            </ul>
            <ul>
              <h5>Guía Para</h5>
              <li>
                <Link to="/">Crear cuenta</Link>
              </li>
              <li>
                <Link to="/">Hacer una compra</Link>
              </li>
              <li>
                <Link to="/">Usar codigo promoción</Link>
              </li>
              <li>
                <Link to="/">Devolución de articulo</Link>
              </li>
              <li>
                <Link to="/">Cancelar pedido</Link>
              </li>
            </ul>
            <ul>
              <h5>Términos y Política</h5>
              <li>
                <Link to="/">Términos de Uso</Link>
              </li>
              <li>
                <Link to="/">Políticas de Envios</Link>
              </li>
              <li>
                <Link to="/">Políticas de Garantia</Link>
              </li>
              <li>
                <Link to="/">Políticas de Privacidad</Link>
              </li>
            </ul>
            <ul>
              <h5>Redes Sociales</h5>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Whatsapp</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
            </ul>
          </div>
  
          <div className="footer-bottom">
            <div>
              <h6>ShopSite</h6>
            </div>
            <address>
              Calle 8, Francisco Henriquez y Carvajal, Brisas del Este, Santo
              Domingo Este.
            </address>
            <address>© 2021 zenuben - Todos los derechos reservados.</address>
          </div>
        </footer>
      );
}

export default Footer;
