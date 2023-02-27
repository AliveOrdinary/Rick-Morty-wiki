import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import "./Filters.css";

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  let clear = () => {
    setPageNumber("");
    setStatus("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        className="text-center text-decoration-underline text-primary mb-3 clear-filter"
        onClick={clear}
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
