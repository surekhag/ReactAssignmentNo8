import { SIGN_IN_TO_SITE, SET_USERS_DATA } from '../constants';

export const signInToSite = (email, password) => {    
  return { type: SIGN_IN_TO_SITE, 
    payload :{emailData: email, passwordData : password} };
};


export const setUserData = (data) => {    
  return { type: SET_USERS_DATA, 
   data };
};