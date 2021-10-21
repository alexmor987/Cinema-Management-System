/*
action - a JSON with :
    - type (mandatory) - the type of the action
    - payload (optional) - the data send with the action
*/
import { ActionTypes } from "../constants/action-types";
const intialState = {
  users: [],
};

const usersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload.users};

    case ActionTypes.REMOVE_USER:
      let arr = state.users;
      let arrAfterRemove = arr.filter((x) => {
        return x.userid !== payload;
      });

      return { ...state, users: arrAfterRemove };

    case ActionTypes.UPDATE_USER:
      let arrUsersData = state.users;
      let index = arrUsersData.findIndex((x) => x.userid === payload.userid);

      if (index >= 0) {
        arrUsersData[index] = payload;
      }
      return { ...state, users: arrUsersData };

    default:
      return state;
  }
};

export default usersReducer;
