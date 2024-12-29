import React from "react";
import Hotel from "./Hotel";
import "./styles.css";
import TripLottie from "./TripLottie";

export default function Hoteles({
  listaHoteles,
  desde,
  hasta,
  pais,
  precio,
  habitaciones
}) {
  //Filtro para fecha que determina si alguno de los dos (fecha desde o fecha hasta) esta vacio
  //no permite que se filtre uno antes que el otro, se mantienen los 18 hoteles.
  //Ademas filtra que no se pueda hacer check out menor que check in, retornando los 18 hoteles
  //y filtra por ultimo que se muestren los hoteles entre las fechas que estan disponibles

  const hotelesFiltradosPorFecha = listaHoteles.filter((hotel) => {
    let desdeSEG = Math.floor(new Date(desde + "T00:00:00").getTime());
    let hastaSEG = Math.floor(new Date(hasta + "T00:00:00").getTime());
    let check_inSEG = Math.floor(new Date(hotel.availabilityFrom).getTime());
    let check_outSEG = Math.floor(new Date(hotel.availabilityTo).getTime());
    if (desde === "" || hasta === "") {
      return true;
    } else if (hastaSEG < desdeSEG) {
      return true;
    } else {
      return desdeSEG >= check_inSEG && hastaSEG <= check_outSEG;
    }
  });

  const hotelesFiltradosPorFechaPais = hotelesFiltradosPorFecha.filter(
    (hotel) => {
      if (pais === "Todos") {
        return true;
      } else {
        return hotel.country.toLowerCase() === pais.toLowerCase();
      }
    }
  );

  const hotelesFiltradosPorFechaPaisHabitacion = hotelesFiltradosPorFechaPais.filter(
    (hotel) => {
      if (habitaciones === "Todos") {
        return true;
      } else {
        if (habitaciones === "pequeño") {
          return hotel.rooms <= 10;
        } else if (habitaciones === "mediano") {
          return hotel.rooms > 10 && hotel.rooms < 20;
        } else {
          return hotel.rooms > 20;
        }
      }
    }
  );

  const hotelesFiltradosPorFechaPaisHabitacionYPrecio = hotelesFiltradosPorFechaPaisHabitacion.filter(
    (hotel) => {
      if (precio === "Todos") {
        return true;
      } else {
        let elPrecioEnNumeros = precio.length;
        return hotel.price === elPrecioEnNumeros;
      }
    }
  );

  let listaFiltradaHoteles = hotelesFiltradosPorFechaPaisHabitacionYPrecio;

  if (listaFiltradaHoteles.length === 0) {
    return (
      <div className="mensajeNoHayHoteles">
        <div className="mensajeTitulo">
          Lo sentimos, no hay ningun hotel con los filtros seleccionados
        </div>
        <div className="lottie">
          <TripLottie />
        </div>
      </div>
    );
  } else {
    return (
      <div className="listaHotelesContainer">
        {listaFiltradaHoteles.map((hotel) => {
          return (
            <Hotel
              key={hotel.slug}
              imagen={hotel.photo}
              nombre={hotel.name}
              desde={hotel.availabilityFrom}
              hasta={hotel.availabilityTo}
              descripcion={hotel.description}
              ciudad={hotel.city}
              pais={hotel.country}
              capacidad={hotel.rooms}
              precio={hotel.price}
            />
          );
        })}
      </div>
    );
  }
}
