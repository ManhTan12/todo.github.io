//import logo from './logo.svg';
import "./App.css";
import HeaderContainer from "./Component/header/HeaderContainer";
import ContentContainer from "./Component/content/ContentContainer";
import FooterContainer from "./Component/footer/FooterContainer";
import PageContainer from "./Component/Page/PageContainer";
import { ThemeContext } from "./Theme/Them";
import { useState, useRef,useContext } from "react";

function App() {

  const [list, setList] = useState([]);
  const [typelist, setTypelist] = useState("");
  const [currentList,setCurrentList] = useState([]);
  const headerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const listsPerPage = 2;

  const indexOfLastTask = currentPage * listsPerPage;
  const indexOfFirstTask = indexOfLastTask - listsPerPage;
  const currentTasks = list.slice(indexOfFirstTask, indexOfLastTask);
  

  const handleCheck = (id) => {
    const newList = [...list];
    const index = newList.findIndex((value) => value.id === id);
    newList[index] = {
      ...newList[index],
      isComplete: !newList[index].isComplete,
    };
    setList(newList);
    setCurrentList(newList)
  };

  // // add todo
  // const handleSaveList = (value) => {
  //   setList([...list, value]);
  //   setCurrentList([...currentList, value]);
  // };

  // edit todo
  const handleEditList = (value) => {
    headerRef.current(value);
  };

  const handleSaveEdit = (item) => {
    const newList = [...list];
    const index = newList.findIndex((value) => value.id === item.id);
    newList[index] = {
      //...newList[index],
      content: item.content,
    };
    setList(newList);
    setCurrentList(newList);
  };

  
  const context1=useContext(ThemeContext)

  return (
    
      <div className="body" id={context1.theme}>
        <div className="container">
          <HeaderContainer
            headerRef={headerRef}
            // list={list}
            // setList={setList}
            // //onSaveList={handleSaveList}
            
            // handleSaveEdit={handleSaveEdit}
           
          />
          <ContentContainer
            //list={currentList}
            //list={list}
            setList={setList}
            typelist={typelist}
            list ={currentTasks}
            handleCheck={handleCheck}
            onEditList={handleEditList}
          />
          <FooterContainer list={list} setList={setList} setTypelist={setTypelist} />
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
