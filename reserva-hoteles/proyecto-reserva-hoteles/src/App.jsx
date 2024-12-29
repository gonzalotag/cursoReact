import "./styles.css";
import React, { useState } from "react";
import { hotelsData } from "./hotelsData";
import Hoteles from "./Hoteles.jsx";
import Filtros from "./Filtros.jsx";
import Header from "./Header.jsx";

export default function App() {
  let [desde, setDesde] = useState("");
  let [hasta, setHasta] = useState("");
  let [pais, setPais] = useState("Todos");
  let [precio, setPrecio] = useState("Todos");
  let [habitaciones, setHabitaciones] = useState("Todos");
  return (
    <div className="App">
      <Header
        desde={desde}
        hasta={hasta}
        pais={pais}
        precio={precio}
        habitaciones={habitaciones}
      />
      <Filtros
        desde={desde}
        hasta={hasta}
        pais={pais}
        precio={precio}
        habitaciones={habitaciones}
        setDesde={setDesde}
        setHasta={setHasta}
        setPais={setPais}
        setPrecio={setPrecio}
        setHabitaciones={setHabitaciones}
      />
      <Hoteles
        listaHoteles={hotelsData}
        desde={desde}
        hasta={hasta}
        pais={pais}
        precio={precio}
        habitaciones={habitaciones}
      />
    </div>
  );
}
