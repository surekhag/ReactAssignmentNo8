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
  console.log("in reducer", action);
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,       
    //     userid: '',
    // name: "",
    // role: "",
    // manager_id: '',
    // manager_name: ""
      };
      
    default:
      return state;
  }
};

export default rootReducer;
