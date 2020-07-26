import { all } from 'redux-saga/effects';

import rootAppSaga from 'saga/appSaga';

export default function* rootSaga() {
  yield all([rootAppSaga()]);
}
