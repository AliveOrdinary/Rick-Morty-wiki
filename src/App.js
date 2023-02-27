import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((resp) => resp.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4 fw-bold">
        Rick & Morty <span className="text-primary">Wiki</span>
      </h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setStatus={setStatus}
            setGender={setGender}
            setPageNumber={setPageNumber}
          />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={info}
      />
    </div>
  );
}

export default App;
