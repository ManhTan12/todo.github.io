//import logo from './logo.svg';
import "./App.css";
import HeaderContainer from "./Component/header/HeaderContainer";
import ContentContainer from "./Component/content/ContentContainer";
import FooterContainer from "./Component/footer/FooterContainer";
import PageContainer from "./Component/Page/PageContainer";
import { ThemeContext } from "./Theme/Them";
import { useState, useRef, useContext } from "react";

function App({ todoLists }) {
  const [typelist, setTypeList] = useState('all');
  const headerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const listsPerPage = 6;

  const getAll = () => todoLists;

  const getActive =() => todoLists.filter(todo => !todo.isComplete);
  const getCompleted =() => todoLists.filter(todo => todo.isComplete);
  
  let filteredTasks;

  if (typelist === 'all') {
    filteredTasks = getAll();
  } else if (typelist === 'completed') {
    filteredTasks = getCompleted();
  } else if (typelist === 'active') {
    filteredTasks = getActive();
  }
  

  const indexOfLastTask = currentPage * listsPerPage;
  const indexOfFirstTask = indexOfLastTask - listsPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);


  const handleChange = (filter) => {
    setTypeList(filter);
    setCurrentPage(1);
  };

  // edit todo
  const handleEditList = (value) => {
    headerRef.current(value);
  };

  const context1 = useContext(ThemeContext);

  return (
    <div className="body" id={context1.theme}>
      <div className="container">
        <HeaderContainer headerRef={headerRef} />
        <ContentContainer
          filteredTasks={filteredTasks}
          typelist={typelist}
          currentTasks={currentTasks}
          onEditList={handleEditList}
        />
        <FooterContainer
          setTypeList={setTypeList}
          typelist={typelist}
          handleChange={handleChange}
        />
        <PageContainer
          setCurrentPage={setCurrentPage}
          listsPerPage={listsPerPage}
          currentPage={currentPage}
        />
        <button onClick={context1.toggleTheme}>Mode</button>
      </div>
    </div>
  );
}

export default App;
