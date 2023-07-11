//import { useState } from "react"
import "./content.css"
import View from "../view/View"
//import App from "../../App";
import { useState,useEffect,useRef } from "react";

const Content = ({ list,typelist,setList,handleDelete,handleCheck,onEditList}) => {
  const handleEdit =(value) =>{
    onEditList(value)
  }

  const [isBottom, setIsBottom] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = scrollContainerRef.current;

      if (scrollTop + clientHeight >= scrollHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    const handleResize = () => {
      // Khi resize trình duyệt, hãy chắc chắn kiểm tra lại scroll đáy
      handleScroll();
    };

    // Đăng ký các sự kiện scroll và resize
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Xóa bỏ đăng ký khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <div className="contain" ref={scrollContainerRef} style={{ height: '100px', overflow: 'auto' }}>
            <ul className="contain-ul">
                {list.map((value, index) => {
                    if (typelist === ''|| value.isComplete === typelist) {
                      return (
                        <View value={value} handleCheck={handleCheck} handleDelete={handleDelete}
                       list={list} setList={setList} onEdit={handleEdit}/>
                      )
                    }
                })}
            </ul>
        </div>
    )
}

export default Content