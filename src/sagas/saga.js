import { takeLatest,put, call } from 'redux-saga/effects';
import { ACTION_TYPE } from '../redux/reducer';
import axiosClient from '../api/axiosClient';
import ProductApi from '../api/productAPI';
function* getTaskSaga(){
    debugger;
    try{
        const res = yield call(axiosClient.get,'')
        debugger;
        yield put({type: ACTION_TYPE.FETCH_TODOS_SUCCESS, payload:res})
    }catch(error){
        yield put ({type: ACTION_TYPE.FETCH_TODOS_SUCCESS, payload: error})
    }
}


function* addTaskSaga(action){
    
    try{
        const data= yield call(axiosClient.post,'', action.payload)
        yield put({type: ACTION_TYPE.ADD_TODO, payload: data})
    }catch (error){
        yield put({type: ACTION_TYPE.ADD_TODO, payload: error})
    }
}

function* deletedTaskSaga(action){
    try{
        const data= yield call(axiosClient.delete,`/${action.id}`, action.payload)
        debugger;
        yield  put({type: ACTION_TYPE.DELETE_TODO, payload: data})
    }catch (error){
        yield put({type: ACTION_TYPE.DELETE_TODO, payload: error})
    }
}

function* setTaskSaga(action){
    try{ 
        const data = yield call(axiosClient.put,'', action.payload)
        yield put({type: ACTION_TYPE.SET_TODO, payload: data})
    }catch (error){
        yield put({type: ACTION_TYPE.SET_TODO, payload: error})
    }
}

function* editTaskSaga(action){
    try{ 
        const data = yield call(axiosClient.put,'', action.payload)
        yield put({type: ACTION_TYPE.EDIT_TODO, payload: data})
    }catch (error){
        yield put({type: ACTION_TYPE.EDIT_TODO, payload: error})
    }
}

export {
    getTaskSaga,
    addTaskSaga,
    deletedTaskSaga,
    setTaskSaga,
    editTaskSaga
}