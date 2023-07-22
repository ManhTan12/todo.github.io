import "./patination.css";
import { useState, useEffect } from "react";

  const page = 10;
  const numberPage = [1,2,3,4,5,6,7,8,9,10];
  const listsPerPage = 2;

function Patination({ list, setCurrentList }) {
  const [current, setCurrent] = useState(1);
  const [arrOfCurrent, setArrOfCurrent] = useState([]);

  useEffect(() => {
    let tempNumberPage = [...numberPage];
    if (current >= 1 && current <= 3) {
      tempNumberPage = [1, 2, 3, 4, "...", numberPage.length];
    } else if (current === 4) {
      let sliced = numberPage.slice(0, 5);
      tempNumberPage = [...sliced, "...", numberPage.length];
    } else if (current > 4 && current < numberPage.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numberPage.slice(current - 2, current); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberPage.slice(current, current + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberPage = [
        1,
        "...",
        ...sliced1,
        ...sliced2,
        "...",
        numberPage.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (current > numberPage.length - 3) {
      // > 7
      const sliced = numberPage.slice(numberPage.length - 4); // slice(10-4)
      tempNumberPage = [1, "...", ...sliced];
    }
    setArrOfCurrent(tempNumberPage);
  }, [current]);

  // useEffect(() => {
  //   const lastList = current * listsPerPage;
  //   const firstList = lastList - listsPerPage;
  //   const currentLists = list.slice(firstList, lastList);

  //   setCurrentList(currentLists);
  // }, [current]);



  const handleCurrent = (pageNumber)=>{
    //setCurrent((prev) => (prev === 1 ? prev : prev - 1)); 
    const lastList = pageNumber * listsPerPage;
    const firstList = lastList - listsPerPage;
    const currentLists = list.slice(firstList, lastList);
    setCurrentList(currentLists);
    setCurrent(pageNumber);
  }

  return (
    <div className="patination-container">
      <a
        href="!#"
        
        onClick={() => setCurrent((prev) => (prev === page ? prev : prev - 1))}
      >
        Prve
      </a>
      {arrOfCurrent.map((page, index) => {
        return (
          <a
            key={index}
            onClick={() => handleCurrent(page)}
            href="!#"
            className={current === page ? "active" : ""}
          >
            {page}
          </a>
        );
      })}
      <a
        href="!#"
        onClick={() => setCurrent((prev) => (prev === page ? prev : prev + 1))}
      >
        Next
      </a>
    </div>
  );
}

export default Patination;
