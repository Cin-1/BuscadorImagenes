import React, { useState } from "react";
import Error1 from "./Error1";

const Formulario = ({ guardarBusqueda }) => {
  const [termino, guardarTermino] = useState("");
  const [error, guardarError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termino.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusqueda(termino);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg "
            placeholder="Busca una imagen, Ej: café o deportes"
            onChange={(e) => guardarTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error1 mensaje="Agrega un término de búsqueda" /> : null}
    </form>
  );
};

export default Formulario;
