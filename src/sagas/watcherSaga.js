import { takeLatest } from 'redux-saga/effects';
import { ACTION_TYPE } from '../redux/reducer';

import { getTaskSaga,addTaskSaga,setTaskSaga,editTaskSaga,deletedTaskSaga } from './saga';

function* watchGetTasks() {
    yield takeLatest(ACTION_TYPE.FETCH_TODOS_REQUEST, getTaskSaga); // ACTION_TYPE.FETCH_TODOS_REQUEST sẽ kích hoạt getTaskWorker
}
function* watchAddTasks() {
    yield takeLatest(ACTION_TYPE.FETCH_TODOS_REQUEST, addTaskSaga); 
}
function* watchEditTasks() {
    yield takeLatest(ACTION_TYPE.FETCH_TODOS_REQUEST, editTaskSaga); 
}
function* watchSetTasks() {
    yield takeLatest(ACTION_TYPE.FETCH_TODOS_REQUEST, setTaskSaga); 
}
function* watchDeletedTasks() {
    yield takeLatest(ACTION_TYPE.FETCH_TODOS_REQUEST, deletedTaskSaga); 
}
export {
    watchGetTasks,
    watchAddTasks,
    watchDeletedTasks,
    watchSetTasks,
    watchEditTasks
  };