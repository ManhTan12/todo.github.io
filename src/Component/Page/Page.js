//import { useState } from "react";
import "./page.css"
const Page = ({todoLists, setCurrentPage, listsPerPage, currentPage}) => {


  const handleChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const pageNumbers = Math.ceil(todoLists.length / listsPerPage);
  const renderPageNumbers = [];

  for (let number = 1; number <= pageNumbers; number++) {
    const isColor = number === currentPage;

    const butStyle ={
      backgroundColor: isColor ? "blue" : "white",
    };

    renderPageNumbers.push(
      <button className="page-but" style={butStyle} key={number} onClick={() => handleChange(number)}>
        {number}
      </button>
    );
  }
  

  return (
    <div className="page">{renderPageNumbers.map(item => item)}</div>
  );
};

export default Page;
