import { getCategoriesAndDocuments } from "../../Utils/Firebase/Firebase.utils";
import { createAction } from "../../Utils/Reducer/Reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./CategoryTypes";

export const fetchCategoriesStart = () => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments()
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}