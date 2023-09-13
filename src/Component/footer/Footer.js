import './footer.css'


const Footer = ({handleChange,typelist,todoLists}) =>{
    return (
        <div className='footer'>
            <p>{todoLists.length} Item left</p>
            <div className='but3'>
                <button className={`but1 ${typelist === 'all' ? 'active' : ''} `} onClick={() =>handleChange('all')}>All </button>
                <button className={`but1 ${typelist === 'active' ? 'active' : ''} `} onClick={() =>handleChange('active')}>Active </button>
                <button className={`but1 ${typelist === 'completed' ? 'active' : ''} `} onClick={() =>handleChange('completed')}>Complete </button>
                <button className='but1'>Complete</button>
            </div>
        </div>
    )
}

export default Footer;