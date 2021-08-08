import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import {
  fetchExampleTasks,
  selectTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./localeStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Przykładowe zadania nie zostały pobrane prawidłowo... Proszę, odśwież stronę i spróbuj ponownie.");
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