import React from "react";

const Imagen = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img
          src={previewURL}
          alt={tags}
          className="card-img-top"
          style={{
            maxWidth: "230px",
            maxHeight: "140px",
            minWidth: "230px",
            minHeight: "140px",
          }}
        />
      </div>
      <div className="card-body">
        <p className="card-text">{likes} Me gusta</p>
        <p className="card-text">{views} Vistas</p>
      </div>
      <div className="card-footer">
        <a
          href={largeImageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-block"
        >
          Ver Imagen
        </a>
      </div>
    </div>
  );
};

export default Imagen;
