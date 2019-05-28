import { all } from 'redux-saga/effects';
import todoSaga from './todos';

export default function* rootSaga() {
  yield all([
    todoSaga(),
  ]);
}
