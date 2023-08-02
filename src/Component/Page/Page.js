//import { useState } from "react";
import "./page.css"
const Page = ({todoLists, setCurrentPage, listsPerPage}) => {
  console.log('listsPerPage', listsPerPage);
  console.log('todoLists 1', todoLists);
  console.log('setCurrentPage', setCurrentPage);

  const handleChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(todoLists.length / listsPerPage);
  const renderPageNumbers = [];

  for (let number = 1; number <= pageNumbers; number++) {
    renderPageNumbers.push(
      <button className="page-but" key={number} onClick={() => handleChange(number)}>
        {number}
      </button>
    );
  }
  

  return (
    <div className="page">{renderPageNumbers.map(item => item)}</div>
  );
};

export default Page;
