import {  connect } from "react-redux"
import { ACTION_TYPE } from "../../redux/reducer"

import Footer from "./Footer";


function mapStateToProps(state, ownProps){
    return{
        todoLists: state,
    }
}

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;