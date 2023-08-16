//import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import HeaderContainer from "./Component/header/HeaderContainer";
import ContentContainer from "./Component/content/ContentContainer";
import FooterContainer from "./Component/footer/FooterContainer";
import PageContainer from "./Component/Page/PageContainer";
import { ThemeContext } from "./Theme/Them";
import { useState, useRef, useContext,useEffect } from "react";

function App({ todoLists }) {
  const [listUser,setListUser]=useState([]);
  const [typelist, setTypeList] = useState('all');
  const headerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const listsPerPage = 10;

  const getAll = () => listUser;
  const getActive =() => listUser.filter(todo => !todo.isComplete);
  const getCompleted =() => listUser.filter(todo => todo.isComplete);
  
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

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://reqres.in/api/users?page=1');
      if (res.data && res.data.data) {
        setListUser(res.data.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addLists = async (newName)=>{
    try{
      const res = await axios.post('https://reqres.in/api/users', {
        first_name: newName,
      })
      setListUser([res.data,...listUser]);
    }catch(error){
      console.error('Error adding:', error);
    }
  }

  const editLists = async (updatedList) => {
    try {
       await axios.put(`https://reqres.in/api/users/${updatedList.id}`, updatedList);
       const updatedListUser = listUser.map((post) =>
          post.id === updatedList.id ? updatedList : post
       );
       setListUser(updatedListUser);
    } catch (error) {
       console.error('Error editing:', error);
    }
 };

  const deleteList = async (id) => {
    try {
       await axios.delete(`https://reqres.in/api/users/${id}`);
       setListUser(
          listUser.filter((post) => {
             return post.id !== id;
          })
       );
    } catch (error) {
       console.error('Error deleting:', error);
    }
 };

  const context1 = useContext(ThemeContext);

  return (
    <div className="body" id={context1.theme}>
      <div className="container">
        <HeaderContainer headerRef={headerRef} addLists={addLists} />
        <ContentContainer
          listUser={listUser}
          filteredTasks={filteredTasks}
          typelist={typelist}
          currentTasks={currentTasks}
          onEditList={handleEditList}
          deleteList={deleteList}
          editLists={editLists}
        />
        <FooterContainer
          listUser={listUser}
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
