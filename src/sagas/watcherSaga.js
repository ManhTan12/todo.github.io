import { takeEvery, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPE } from '../redux/reducer';

import { getTaskSaga,addTaskSaga,setTaskSaga,editTaskSaga,deletedTaskSaga } from './saga';

function* watchGetTasks() {
    debugger;
    yield takeEvery(ACTION_TYPE.GETTASKS, getTaskSaga); // ACTION_TYPE.FETCH_TODOS_REQUEST sẽ kích hoạt getTaskWorker
}
function* watchAddTasks() {
    debugger
    yield takeEvery(ACTION_TYPE.ADD_TODO_SAGA, addTaskSaga); 
}
// function* watchEditTasks() {
//     yield takeLatest(ACTION_TYPE.FETCH_TODOS_REQUEST, editTaskSaga); 
// }
// function* watchSetTasks() {
//     yield takeLatest(ACTION_TYPE.FETCH_TODOS_REQUEST, setTaskSaga); 
// }
function* watchDeletedTasks() {
    debugger;
    yield takeLatest(ACTION_TYPE.DELETE_TODO_SAGA, deletedTaskSaga); 
}
export {
    watchGetTasks,
    watchAddTasks,
    watchDeletedTasks,
    // watchSetTasks,
    // watchEditTasks
  };