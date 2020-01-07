import { put, takeLatest, call } from 'redux-saga/effects';

import { SET_USERS_DATA, SIGN_IN_TO_SITE } from '../../constants';

import {setUserData} from '../../actions/action';
import {loginToSiteApi} from '../../apis/api';



function* workerLoginSaga(data) {    
    try {        
      const response = yield call(loginToSiteApi, data);
      console.log(response.request.response);
      yield put(setUserData(response.request.response));
    } catch (err) {
      if (err.response && err.response.data) {
        // const errorData = err.response.data;
        // yield put({ type: SET_ERROR_STATE, errorData });
      }
    }
  }
  
  export default function* watchLoginSaga() {    
    yield takeLatest(
        SIGN_IN_TO_SITE,
        workerLoginSaga
    );
  }
  