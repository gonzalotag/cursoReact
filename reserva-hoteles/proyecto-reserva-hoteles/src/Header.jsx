import "./styles.css";
import clouds from "./svg/clouds.svg";

export default function Header({ desde, hasta, pais, precio, habitaciones }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let desdeAlNatural = new Date(desde + "T00:00:00").toLocaleDateString(
    "es-AR",
    options
  );
  let hastaAlNatural = new Date(hasta + "T00:00:00").toLocaleDateString(
    "es-AR",
    options
  );
  return (
    <div className="Header">
      <div className="leftHeader">
        <div className="tituloHeader">Hoteles Live inn</div>
        <div className="subtitulosHeader">
          <div className="subtituloFecha">
            {desde === "" ? (
              <div>Sin fecha de check-in seleccionada</div>
            ) : (
              <div>Desde el dia {desdeAlNatural}</div>
            )}
            {hasta === "" ? (
              <div>&nbsp;y sin fecha de check-out.</div>
            ) : (
              <div>&nbsp;hasta el dia {hastaAlNatural}</div>
            )}
          </div>
          {pais === "Todos" ? (
            <div>En cualquier pais </div>
          ) : (
            <div>En {pais} </div>
          )}
          {precio === "Todos" ? (
            <div>A cualquier precio </div>
          ) : (
            <div>A un precio {precio} </div>
          )}
          {habitaciones === "Todos" ? (
            <div>De cualquier tamaño</div>
          ) : (
            <div>De tamaño {habitaciones} </div>
          )}
        </div>
      </div>
      <div className="rightHeader">
        <img width="200px" src={clouds} alt="clouds" />
      </div>
    </div>
  );
}
