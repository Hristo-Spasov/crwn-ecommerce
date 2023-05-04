import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading:false,
  error:null,
};

//! in Redux actions are globally passed to every reducer so we MUST AWAYS RETURN THE STATE SO WE KNOW WHICH STATE HASNT CHANGE
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state, //aways get the values we dont modify which is the prev state
        currentUser: payload, //the state we are going to modify
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser:null
      }
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state, 
        error: payload, 
      };
    default:
      return state
  }
};

