import { createAction } from "../../Utils/Reducer/Reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./CategoryTypes";

export const setCategories = (categoriesArray) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);