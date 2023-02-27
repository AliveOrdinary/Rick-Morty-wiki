import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/category/InputGroup";

const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState(1);
  let [results, setResults] = useState([]);
  let { dimension, name, type } = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((resp) => resp.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((resp) => resp.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center">
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h4 className="text-center">
          Dimension :{" "}
          <span className="text-success">
            {dimension === "" ? "Unknown" : dimension}
          </span>
        </h4>
        <h6 className="text-center">Type : {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center">Pick Location</h4>
          <InputGroup setID={setID} name="Location" total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
