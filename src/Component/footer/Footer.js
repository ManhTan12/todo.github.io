//import { useDispatch, useSelector } from 'react-redux'
import './footer.css'


const Footer = ({todoLists,handleChange}) =>{
     
    return (
        <div className='footer'>
            <p>{todoLists.length} Item left</p>
            <div className='but3'>
                <button className='but1' onClick={() =>handleChange('all')}>All </button>
                <button className='but1' onClick={() =>handleChange('active')}>Active </button>
                <button className='but1' onClick={() =>handleChange('completed')}>Complete </button>
                <button className='but1'>Complete</button>
            </div>
        </div>
    )
}

export default Footer;