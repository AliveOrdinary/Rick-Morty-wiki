import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary next"
      previousClassName="btn btn-primary prev"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      marginPagesDisplayed={width < 576 ? 2 : 3}
      pageRangeDisplayed={width < 576 ? 2 : 3}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
