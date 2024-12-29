import React from "react";
import "./styles.css";
import bed from "./svg/bed3.svg";
import location from "./svg/location.svg";
import calendar1 from "./svg/calendar1.svg";
import dollar from "./svg/dollar.svg";
import dollar2 from "./svg/dollar2.svg";

export default function Hotel(props) {
  // para mostrar las fechas en lenguaje natural:
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let desdeAlNatural = new Date(props.desde).toLocaleDateString(
    "es-AR",
    options
  );
  let hastaAlNatural = new Date(props.hasta).toLocaleDateString(
    "es-AR",
    options
  );
  ////////////////////////////////////////////////////////

  const manejarBoton = (event) => {
    return alert("ERROR Favor comunicarse al 055-55-5CORRIENTE");
  };

  return (
    <div className="CartaHotelContainer">
      <img
        className="ImagenPortada"
        width="340px"
        src={props.imagen}
        alt={props.nombre}
      />
      <div className="contenedorTextoCartaHotel">
        <h2 className="tituloCartaHotel">{props.nombre}</h2>
        <div className="contenedorFechas">
          <div className="desdeCartaHotel">
            <img
              className="iconoCalendario"
              width="35px"
              src={calendar1}
              alt="from icon"
            />
            Desde el {desdeAlNatural}{" "}
          </div>
          <div></div>
          <div className="hastaCartaHotel">
            <img
              className="iconoCalendario"
              width="35px"
              src={calendar1}
              alt="to icon"
            />
            Hasta el {hastaAlNatural}{" "}
          </div>
        </div>
        <p className="descripcionCartaHotel">{props.descripcion}</p>
        <div className="ciudadCartaHotel">
          <img width="25px" src={location} alt="pin icon" />
          {props.ciudad + " , " + props.pais}
        </div>
        <div className="contenedorCapacidadPrecio">
          <div className="capacidadCartaHotel">
            <img width="45px" src={bed} alt="bed icon" />
            {props.capacidad + " habitaciones"}
          </div>

          <div className="precioCartaHotel">
            {props.precio >= 1 ? (
              <img width="20px" src={dollar} alt="dolar negro" />
            ) : (
              <img width="20px" src={dollar2} alt="dolar gris" />
            )}

            {props.precio >= 2 ? (
              <img width="20px" src={dollar} alt="dolar negro" />
            ) : (
              <img width="20px" src={dollar2} alt="dolar gris" />
            )}
            {props.precio >= 3 ? (
              <img width="20px" src={dollar} alt="dolar negro" />
            ) : (
              <img width="20px" src={dollar2} alt="dolar gris" />
            )}
            {props.precio >= 4 ? (
              <img width="20px" src={dollar} alt="dolar negro" />
            ) : (
              <img width="20px" src={dollar2} alt="dolar gris" />
            )}
          </div>
        </div>
      </div>
      <button onClick={manejarBoton} className="botonReservarCartaHotel">
        Reservar
      </button>
    </div>
  );
}
