import { SET_USERS_DATA } from '../constants';

export const setUserData = (email, password) => {
    console.log("in action", email, password);
  return { type: SET_USERS_DATA, 
    payload :{emailData: email, passwordData : password} };
};