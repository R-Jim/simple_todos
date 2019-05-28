import { call, takeEvery, take, put, select } from 'redux-saga/effects';
import { FETCH_DATA, fetchComplete } from '../reducers/Todos';
import { eventChannel } from 'redux-saga';
import Todos from '../../api/todos/Todos';

const eventChannelCall = () => eventChannel((dispatch) => {
  const computation = Tracker.autorun(() => {
    const fetch = Meteor.subscribe('todo.list');
    let data = [];
    if (fetch.ready()) {
      data = Todos.find().fetch();
    }
    setTimeout(() => dispatch({ data, isReady: fetch.ready() }), 0);
  });
  return () => {
    computation.stop();
  };
});

function* fetchData() {
  const channel = yield call(eventChannelCall);
  while (true) {
    const { data, isReady } = yield take(channel);
    // Do things with the received event
    if (isReady) {
      yield put(fetchComplete(data));
    }
  }
}

export default function* contactSaga() {
  yield takeEvery(FETCH_DATA, fetchData);
}
