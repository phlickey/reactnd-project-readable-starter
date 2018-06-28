
const SET_CURRENTLY_VISIBLE_CATEGORY = 'SET_CURRENTLY_VISIBLE_CATEGORY';
const setCurrentlyVisibleCategoryCreator = (category) =>({
    type: SET_CURRENTLY_VISIBLE_CATEGORY,
    payload: category
});

export {setCurrentlyVisibleCategoryCreator, SET_CURRENTLY_VISIBLE_CATEGORY};
