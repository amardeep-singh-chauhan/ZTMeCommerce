import { USER_ACTION_TYPES } from "./UserTypes"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInUserWithEmailAndPassword, signInwithGooglePopup, signOutUser } from "../../Utils/Firebase/Firebase.utils"
import { all, call, put, takeLatest } from "redux-saga/effects"
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpUserFailed, signUpUserSuccess } from "./UserActions"

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInwithGooglePopup)
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signUpUser({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password)
        yield put(signUpUserSuccess(user, { displayName }))
    } catch (error) {
        yield put(signUpUserFailed(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
    yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* signOut() {
    try {
        yield call(signOutUser)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUser);
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignUpStart), call(onSignUpSuccess), call(onSignOutStart)]);
}