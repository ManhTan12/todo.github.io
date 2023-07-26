import {  connect } from "react-redux"
import { ACTION_TYPE } from "../../redux/reducerType"
import Footer from "./Footer";


function mapStateToProps(state, ownProps){
    const todoLists = state;
    return{
        todoLists,
    }
}

function mapDispatchToProps(dispatch){
    return {
        setType : (newList) => dispatch({type: ACTION_TYPE.SET_TYPE_LIST, payload: newList}),
    }
}

const FooterType = connect(mapStateToProps,mapDispatchToProps)(Footer);

export default FooterType;