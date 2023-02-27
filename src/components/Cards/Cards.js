import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((item) => {
      let { id, name, image, location, status } = item;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark"
        >
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
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }
  return <>{display}</>;
};

export default Cards;
