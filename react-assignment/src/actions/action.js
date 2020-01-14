import { SIGN_IN_TO_SITE, SET_USERS_DATA, GET_USER_ROLE_INFO, SET_USER_ROLE_INFO } from '../constants';

export const signInToSite = (email, password) => {    
  return { type: SIGN_IN_TO_SITE, 
    payload :{emailData: email, passwordData : password} };
};


export const setUserData = (data) => {    
  return { type: SET_USERS_DATA, 
   data };
};

export const setUserRoleInfo = (data) => {  
  return {
    type : SET_USER_ROLE_INFO,
    data
  }
};