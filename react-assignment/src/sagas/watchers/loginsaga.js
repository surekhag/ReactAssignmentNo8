import { put, takeLatest, call } from 'redux-saga/effects';

import { SET_USERS_DATA } from '../../constants';

import {setUserData} from '../../actions/action';
import {loginToSiteApi} from '../../apis/api';



function* workerLoginSaga(data) {
    console.log("in saga");
    try {
        console.log(loginToSiteApi);
      const response = yield call(loginToSiteApi, data);
      console.log(response.data);
      yield put(setUserData(response.status));
    } catch (err) {
      if (err.response && err.response.data) {
        // const errorData = err.response.data;
        // yield put({ type: SET_ERROR_STATE, errorData });
      }
    }
  }
  
  export default function* watchLoginSaga() {
    console.log("in saga");
    yield takeLatest(
        SET_USERS_DATA,
        workerLoginSaga
    );
  }
  