import loginsaga from './watchers/loginsaga';
import { all, fork, call, put } from 'redux-saga/effects';

function* root() {
  yield all([  
    fork(loginsaga),   
  ]);
}

export default root;
