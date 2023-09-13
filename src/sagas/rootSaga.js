import { all } from 'redux-saga/effects';
import { watchAddTasks, watchSetTasks, watchDeletedTasks, watchEditTasks, watchGetTasks } from './watcherSaga';

function* rootSaga() {
    yield all([
        watchGetTasks,
        watchAddTasks,
        watchDeletedTasks,
        watchSetTasks,
        watchEditTasks
    ]);
}

export default rootSaga;