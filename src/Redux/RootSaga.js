import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./Categories/CategorySaga";
import { userSagas } from "./User/UserSaga";

export function* rootSaga() {
    yield all([call(categoriesSaga), call(userSagas)])
}