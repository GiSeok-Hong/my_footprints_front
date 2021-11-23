import { Action } from "../actions/formAction";
import { SIGN_IN, SIGN_UP } from "../actions/actionTypes";

const initialState = {
  formType:''
}




const formTypeReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        formType:'Sign In'
      };
    case SIGN_UP:
      return {
        ...state,
        formType:'Sign Up'
      };
    default:
      return state;
  }
}

export default formTypeReducer;