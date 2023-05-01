import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

//! in Redux actions are globally passed to every reducer so we MUST AWAYS RETURN THE STATE SO WE KNOW WHICH STATE HASNT CHANGE
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, //aways get the values we dont modify which is the prev state
        currentUser: payload, //the state we are going to modify
      };
    default:
      return state
  }
};

