import { createSelector } from "reselect"


//Getting the whole state and transforming the slice we need
const selectCategoryReducer = (state) => state.categories


//Creating a memoized selector takes 2 params,an array [] of the input selectors and a output function () =>
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)


//categories is now memoized in here as well and is now an array that we can reduce once and if it's not changed wont re-render it
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc,category) => {
        const {title,items} = category
        acc[title.toLowerCase()] = items
        return acc
    },{}))


export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)