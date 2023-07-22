import { useDispatch, useSelector } from 'react-redux'
import './footer.css'


const Footer = () =>{
    const todoLists = useSelector((state) => state.todoLists)
    const dispatch = useDispatch()
    const handleActive =() =>{
        dispatch({type: 'UPDATE_TYPE_LIST', payload: false})
    }
    const handleComplete =() =>{
        dispatch({type: 'UPDATE_TYPE_LIST', payload: true})
    }
    const handleAll =() =>{
        dispatch({type: 'UPDATE_TYPE_LIST', payload: ''})
    }
    

    return (
        <div className='footer'>
            <p>{todoLists.length} Item left</p>
            <div className='but3'>
                <button className='but1' onClick={handleAll}>All </button>
                <button className='but1' onClick={handleActive}>Active </button>
                <button className='but1' onClick={handleComplete}>Complete </button>
            </div>
            
                <button className='but11'>Complete</button>
            
        </div>
    )
}

export default Footer