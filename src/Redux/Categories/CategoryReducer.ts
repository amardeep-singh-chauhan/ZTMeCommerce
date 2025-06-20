import { CategoryAction } from "./CategoryActions";
import { Category, CATEGORY_ACTION_TYPES } from "./CategoryTypes";

export type CategoryInitialState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly errors: Error | null;
}

const CATEGORIES_INITIAL_STATE: CategoryInitialState = {
    categories: [],
    isLoading: false,
    errors: null,
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as CategoryAction) => {

    switch (action.type) {
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true };
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, isLoading: false };
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return { ...state, errors: action.payload, isLoading: false };
        default:
            return state;
    }
}