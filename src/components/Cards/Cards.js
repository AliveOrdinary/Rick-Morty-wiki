import React from "react";
import "./Cards.css";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((item) => {
      let { id, name, image, location, status } = item;
      return (
        <div key={id} className="col-4 position-relative mb-4">
          <div className="cards">
            <img src={image} alt="" className="img-fluid img" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className="position-absolute badge bg-danger">
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className="position-absolute badge bg-success">
                  {status}
                </div>
              );
            } else {
              return (
                <div className="position-absolute badge bg-secondary">
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }
  return <>{display}</>;
};

export default Cards;