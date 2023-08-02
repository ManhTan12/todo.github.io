//import logo from './logo.svg';
import "./App.css";
import HeaderContainer from "./Component/header/HeaderContainer";
import ContentContainer from "./Component/content/ContentContainer";
import FooterContainer from "./Component/footer/FooterContainer";

import PageContainer from "./Component/Page/PageContainer";
import { ThemeContext } from "./Theme/Them";
import { useState, useRef,useContext } from "react";

function App({todoLists}) {
  
  // const [list, setList] = useState([]);
   const [typelist, setTypelist] = useState("");
  // //const [currentList,setCurrentList] = useState([]);
  const headerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const listsPerPage = 5;

  const indexOfLastTask = currentPage * listsPerPage;
  const indexOfFirstTask = indexOfLastTask - listsPerPage;
  const currentTasks = todoLists.slice(indexOfFirstTask, indexOfLastTask);
  
  console.log('indexOfFirstTask', indexOfFirstTask);
  console.log('indexOfLastTask', indexOfLastTask);
  console.log('currentTasks', currentTasks);
  // edit todo
  const handleEditList = (value) => {
    headerRef.current(value);
  };

  const context1=useContext(ThemeContext)

  return (
    
      <div className="body" id={context1.theme}>
        <div className="container">
          <HeaderContainer
            headerRef={headerRef}
          />
          <ContentContainer
            typelist={typelist}
            currentTasks ={currentTasks}
            onEditList={handleEditList}
          />
          <FooterContainer setTypelist={setTypelist} />
          <PageContainer setCurrentPage ={setCurrentPage} listsPerPage = {listsPerPage}/>
          <button onClick={context1.toggleTheme}>Mode</button>
        </div>
      </div>
    
  );
}

export default App;

/*luôn luôn chạy
useEffic(func abc(){

})



*/
