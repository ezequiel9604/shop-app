import { Link } from "react-router-dom";

function UserInfo(props) {
  return (
    <div className="user-info">
      <div>
        <p>
          <strong>Nombre: </strong>
          {props.user.name}
        </p>

        <p>
          <strong>Telefonos: </strong>
          {props.user.phone + " "}
        </p>

        <p>
          <strong>Correo Electronico: </strong>
          {props.user.email}
        </p>

        <p>
          <strong>Dirección de Envio: </strong>
          {props.user.address.streetName+", "+props.user.address.streetNo+", "+
          props.user.address.city+", "+props.user.address.state}
        </p>

        <p>
          <strong>Instrucciones: </strong>
          {props.user.instructions}
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
