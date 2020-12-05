import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadosImagenes";
function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpagina, guardarTotalPagina] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda === "") return;
      const imagenesPorPagina = 32;
      const key = "19399749-7897a27b64d6bdacc74b3053c";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page${imagenesPorPagina}&page=${paginaactual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);
      const calcularTotalPag = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );
      guardarTotalPagina(calcularTotalPag);
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultarAPI();
  }, [busqueda, paginaactual]);
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    if (nuevaPaginaActual < 1) return;
    guardarPaginaActual(nuevaPaginaActual);
  };
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if (nuevaPaginaActual > totalpagina) return;

    guardarPaginaActual(nuevaPaginaActual);
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center ">
        <ListadoImagenes imagenes={imagenes} />
        {paginaactual === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}
        {paginaactual === totalpagina ? null : (
          <button
            type="button"
            className="btn btn-info "
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
