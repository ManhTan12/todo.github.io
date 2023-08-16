import { useState,useEffect,useRef } from "react"
import "./content.css";
import ViewContainer from "../view/ViewContainer";


const Content = ({
 
  handleCheck,
  onEditList,
  currentTasks,
  deleteList,
  editLists
  
}) => {
  const handleEdit = (value) => {
    onEditList(value);
  };
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
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  

  return (
    <div className="contain" ref={scrollContainerRef}>
      <ul className="contain-ul" >
        {currentTasks?.map((value) => {
          return (
            <ViewContainer handleCheck={handleCheck} onEdit={handleEdit} key={value.id} value={value} deleteList={deleteList} editLists={editLists}/>
          );         
        })}
      </ul>
    </div>
  );
};

export default Content;
