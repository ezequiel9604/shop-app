import { Link } from "react-router-dom";

function UserInfo(props) {
  return (
    <div className="user-info">
      <div>
        <p>
          <strong>Nombre: </strong>John Doe
        </p>

        <p>
          <strong>Telefonos: </strong>809-111-2000{" "}
        </p>

        <p>
          <strong>Correo Electronico: </strong>johndoe01@gmail.com
        </p>

        <p>
          <strong>Dirección de Envio: </strong> Casa 8, Francisco Henriquez y
          Carvajal, Brisas del Este, Santo Domingo Este
        </p>

        <p>
          <strong>Instrucciones: </strong>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aperiam explicabo inventore debitis neque excepturi
          architecto rerum temporibus incidunt.
        </p>
      </div>
      <div>
        <Link to="/">+ agregar otro telefono</Link>
        <Link to="/">+ agregar nueva direccion</Link>
        <Link to="/">+ agregar instrucciones</Link>
      </div>
    </div>
  );
}

export default UserInfo;
