import { createAction } from "../../Utils/Reducer/Reducer.utils";
import { USER_ACTION_TYPES } from "./UserTypes";

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);