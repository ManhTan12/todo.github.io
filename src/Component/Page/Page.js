//import { useState } from "react";

const Page = (todoLists, setCurrentPage, listsPerPage) => {
  
  const handleChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const pageNumbers = Math.ceil(todoLists.length / listsPerPage);
  const renderPageNumbers = [];
  for (let number = 1; number <= pageNumbers; number++) {
    renderPageNumbers.push(
      <button key={number} onClick={() => handleChange(number)}>
        {number}
      </button>
    );
  }

  return (
    <div>{renderPageNumbers}</div>
  );
};

export default Page;
