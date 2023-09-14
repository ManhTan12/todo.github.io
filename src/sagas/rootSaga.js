import { all } from 'redux-saga/effects';
import { watchGetTasks,watchAddTasks,watchDeletedTasks } from './watcherSaga';

function* rootSaga() {
    yield all([
        watchGetTasks(),
        watchAddTasks(),
        watchDeletedTasks(),
        // watchSetTasks,
        // watchEditTasks
    ]);
}

export default rootSaga;