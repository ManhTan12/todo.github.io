//import logo from './logo.svg';
import "./App.css";
import HeaderContainer from "./Component/header/HeaderContainer";
import ContentContainer from "./Component/content/ContentContainer";
import FooterContainer from "./Component/footer/FooterContainer";

import PageContainer from "./Component/Page/PageContainer";
import { ThemeContext } from "./Theme/Them";
import { useState, useRef,useContext } from "react";

function App({todoListsSelector, getActive,getComplete}) {

  const [typelist, setTypelist] = useState('All');
  const headerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const listsPerPage = 6;

  const indexOfLastTask = currentPage * listsPerPage;
  const indexOfFirstTask = indexOfLastTask - listsPerPage;
  const currentTasks = todoListsSelector.slice(indexOfFirstTask, indexOfLastTask);
  
  // edit todo
  const handleEditList = (value) => {
    headerRef.current(value);
  };

  const handleActive =() =>{
    setTypelist('Active')
  }
  const handleComplete =() =>{
      setTypelist('Complete')
  }
  const handleAll =() =>{
      setTypelist('All')
  }
  let filteredTasks = [];
  if ( typelist=== 'Active') {
    filteredTasks = getActive(); // Replace with your actual selectors
  } else if (typelist === 'Complete') {
    filteredTasks = getComplete();
   } // Replace with your actual selectors
  // } else {
  //   filteredTasks = todoListsSelector(); // Replace with your actual selectors for "All"
  // }


  const context1=useContext(ThemeContext)

  return (
    
      <div className="body" id={context1.theme}>
        <div className="container">
          <HeaderContainer
            headerRef={headerRef}
          />
          <ContentContainer
            filteredTasks={filteredTasks}
            typelist={typelist}
            currentTasks ={currentTasks}
            onEditList={handleEditList}
            
          />
          <FooterContainer setTypelist={setTypelist} handleActive={handleActive} handleComplete={handleComplete} handleAll={handleAll} />
          <PageContainer setCurrentPage ={setCurrentPage} listsPerPage = {listsPerPage} currentPage={currentPage}/>
          <button onClick={context1.toggleTheme}>Mode</button>
        </div>
      </div>
    
  );
}

export default App;


