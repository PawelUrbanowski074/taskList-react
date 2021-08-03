import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { 
    fetchExampleTasks, 
    selectTasks, 
    setTasks,
    setTasksError
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocaleStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield put(setTasksError());
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTaskInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTaskInLocalStorageHandler)
}