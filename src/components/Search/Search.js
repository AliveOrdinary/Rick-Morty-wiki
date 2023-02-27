import React from "react";
import "./Search.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        placeholder="Search for Characters"
        type="text"
        className="search-input"
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-primary fs-5"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
