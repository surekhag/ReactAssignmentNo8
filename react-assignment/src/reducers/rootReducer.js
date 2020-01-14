import { SET_USERS_DATA } from '../constants';

const initState = {
    userid: '',
    name: "",
    role: "",
    manager_id: '',
    manager_name: "",
    status:''
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:     
      const result = JSON.parse(action.data);
      return {
        ...state,       
        userid: result.data.userid,
        name: result.data.name,
        role: result.data.role,
        manager_id: result.data.manager_id,
        manager_name: result.data.manager_name,
        status : result.status
      };
    default:
      return state;
  }
};

export default rootReducer;
