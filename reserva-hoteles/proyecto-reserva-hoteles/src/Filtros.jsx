import "./styles.css";
import React from "react";
import reset from "./svg/Reset.svg";

export default function Filtros({
  desde,
  hasta,
  pais,
  precio,
  habitaciones,
  setDesde,
  setHasta,
  setPais,
  setPrecio,
  setHabitaciones
}) {
  const manejarCambiosFechaDesde = (evento) => {
    setDesde(evento.target.value);
  };

  const manejarCambiosFechaHasta = (evento) => {
    setHasta(evento.target.value);
  };

  //Alerta para fecha check out menor que check in - en tiempo unix segundos

  const desdeUnixSEG = Math.floor(new Date(desde).getTime());
  const hastaUnixSEG = Math.floor(new Date(hasta).getTime());
  if (hastaUnixSEG < desdeUnixSEG) {
    alert("ERROR: La fecha de check-out no puede ser menor a la de check-in");
  }

  const manejarCambiosPaises = (evento) => {
    setPais(evento.target.value);
  };

  const manejarCambiosPrecios = (evento) => {
    setPrecio(evento.target.value);
  };

  const manejarCambiosHab = (evento) => {
    setHabitaciones(evento.target.value);
  };

  // manejador para resetear todos los valores
  const manejarClick = () => {
    setDesde("");
    setHasta("");
    setPais("Todos");
    setPrecio("Todos");
    setHabitaciones("Todos");
  };

  return (
    <div className="Filtros">
      <input
        className="inputFechas"
        value={desde}
        onChange={manejarCambiosFechaDesde}
        type="date"
      />
      <input
        className="inputFechas"
        value={hasta}
        onChange={manejarCambiosFechaHasta}
        type="date"
      />
      <select
        className="selects"
        value={pais}
        onChange={manejarCambiosPaises}
        name="paises"
        id="country"
      >
        <option value="Todos">Todos</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
      <select
        className="selects"
        value={precio}
        onChange={manejarCambiosPrecios}
        name="precios"
        id="price"
      >
        <option value="Todos">Todos</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$$</option>
      </select>
      <div className="parHabitacion">
        <div className="iconoHabitacion">
          {/* <img width="30px" src={bedhotelroom} alt="bedhotelroom" /> */}
        </div>
        <select
          className="selects"
          value={habitaciones}
          onChange={manejarCambiosHab}
          name="habitaciones"
          id="rooms"
        >
          <option value="Todos">Todos</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>
      </div>
      <div>
        <button className="limpiarButton" onClick={manejarClick}>
          <img width="18px" src={reset} alt="reset" />
          Reset
        </button>
      </div>
    </div>
  );
}
