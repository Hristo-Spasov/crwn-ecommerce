import {createAction,ActionNoPayload,ActionWithPayload,withMatcher} from '../../utils/reducer/createaction'
import { CATEGORIES_ACTION_TYPES,Category } from './category.types'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase'



export type FetchCategoriesStart = ActionNoPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,Error>


export const fetchCategoriesStart = withMatcher(():FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START))


export const fetchCategoriesSuccess = withMatcher((categoriesArray:Category[]):FetchCategoriesSuccess => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray))



export const fetchCategoriesFailed = withMatcher((error:Error):FetchCategoriesFailed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error))




// The Async Thunk
export const fetchCategoriesAsync  = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())
    try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray))

    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}