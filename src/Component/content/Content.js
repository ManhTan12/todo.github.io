//import { useState } from "react"
import "./content.css"
import View from "../view/View"
//import App from "../../App";
import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import ViewFake from "../view/ViewFake";

const Content = ({ list,typelist,setList,handleDelete,handleCheck,onEditList}) => {
  const handleEdit =(value) =>{
    onEditList(value)
  }
  
  const todoLists = useSelector((state) => state.todoLists);
  const typeList = useSelector((state) => state.typeList);
  const store = useSelector((state) => state);
  console.log('check store', store);

  // const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todoLists);
  // console.log(todos)
  // debugger;

  // const [isBottom, setIsBottom] = useState(false);
  // const scrollContainerRef = useRef(null);

  useEffect(() => {
    // const handleScroll = () => {
    //   const { scrollTop, clientHeight, scrollHeight } = scrollContainerRef.current;

    //   if (scrollTop + clientHeight >= scrollHeight) {
    //     setIsBottom(true);
    //   } else {
    //     setIsBottom(false);
    //   }
    // };

    // const handleResize = () => {
    //   // Khi resize trình duyệt, hãy chắc chắn kiểm tra lại scroll đáy
    //   handleScroll();
    // };

    // // Đăng ký các sự kiện scroll và resize
    // window.addEventListener('scroll', handleScroll);
    // window.addEventListener('resize', handleResize);

    // // Xóa bỏ đăng ký khi component unmount
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []);

  // ref={scrollContainerRef} style={{ height: '100px', overflow: 'auto' }}
    return (
        <div className="contain" >
            <ul className="contain-ul">
              {/* {todoLists.map((value) => <ViewFake key={value.id} value={value} />)} */}
                {todoLists.map((value) => {
                    if (typeList === ''|| value.isComplete === typeList) {
                      return (
                      //   <View value={value} handleCheck={handleCheck} handleDelete={handleDelete}
                      //  list={list} setList={setList} onEdit={handleEdit}/>
                      <ViewFake key={value.id} value={value} />
                      )
                    }
                })}
            </ul>
        </div>
    )
}


export default Content
