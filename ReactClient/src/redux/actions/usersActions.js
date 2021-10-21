import { ActionTypes } from "../constants/action-types";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const removeUser = (userid) => {
  return {
    type: ActionTypes.REMOVE_USER,
    payload: userid,
  };
};
export const updateUser = (userdata) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: userdata,
  };
};
