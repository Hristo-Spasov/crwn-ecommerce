import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase'



export const CATEGORIES_INITIAL_STATE = {
      categories: [],
      isLoading:false,
      error:null,
}

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetch',
  async (_, { dispatch }) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(fetchCategoriesSuccess(categoriesArray))
      return categoriesArray
    } catch (error) {
      dispatch(fetchCategoriesFailed(error))
      console.log(error);
    }
  }
);

export const categoriesSlice = createSlice({
    name:'categories',
    initialState:CATEGORIES_INITIAL_STATE,
    reducers: {
        fetchCategoriesStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchCategoriesSuccess(state, action) {
            state.isLoading = false;
            state.categories = action.payload;
        },
        fetchCategoriesFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
    extraReducers: {
    [fetchCategoriesAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCategoriesAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [fetchCategoriesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
})

export const {fetchCategoriesStart,fetchCategoriesSuccess,fetchCategoriesFailed} = categoriesSlice.actions


export const categoriesReducer = categoriesSlice.reducer

