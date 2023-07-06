//import logo from './logo.svg';
import "./App.css";
import Header from "./Component/header/Header";
import Content from "./Component/content/Content";
import Footer from "./Component/footer/Footer";
import { ThemeContext } from "./Theme/Them";
import { useState, useRef,useContext } from "react";

function App() {
  const [list, setList] = useState([]);
  const [typelist, setTypelist] = useState("");
  const [select, setSelect] = useState("");
  //const [theme, setTheme] = useState("light");
  const headerRef = useRef(null);

  const handleDelete = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleCheck = (id) => {
    const newList = [...list];
    const index = newList.findIndex((value) => value.id === id);
    newList[index] = {
      ...newList[index],
      isComplete: !newList[index].isComplete,
    };
    setList(newList);
  };

  // add todo
  const handleSaveList = (value) => {
    setList([...list, value]);
  };

  // edit todo
  const handleEditList = (value) => {
    headerRef.current.value = value.content;
    setSelect(value);
  };

  const handleSaveEdit = (item) => {
    const newList = [...list];
    const index = newList.findIndex((value) => value.id === item.id);
    newList[index] = {
      ...newList[index],
      content: item.content,
    };
    setList(newList);
  };

  // const handleTheme =() =>{
  //   setTheme((curr) =>(curr === "light" ? "dark" :"light"))
  // }
  const context1=useContext(ThemeContext)

  return (
    
      <div className="body" id={context1.theme}>
        <div className="container">
          <Header
            headerRef={headerRef}
            list={list}
            setList={setList}
            onSaveList={handleSaveList}
            //editList ={editList}
            select={select}
            setSelect={setSelect}
            handleSaveEdit={handleSaveEdit}
          />
          <Content
            list={list}
            setList={setList}
            typelist={typelist}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
            onEditList={handleEditList}
          />
          <Footer list={list} setList={setList} setTypelist={setTypelist} />
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
