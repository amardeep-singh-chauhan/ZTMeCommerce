import { createAction } from "../../Utils/Reducer/Reducer.utils";
import { USER_ACTION_TYPES } from "./UserTypes";

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password});

export const signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpUserStart = (email, password, displayName) => createAction(USER_ACTION_TYPES.SIGN_UP_START, {email, password, displayName});

export const signUpUserSuccess = (user, additionalDetails) => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails});

export const signUpUserFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);