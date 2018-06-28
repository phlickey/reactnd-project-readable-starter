const SET_POSTS_SORTED_BY = 'SET_POSTS_SORTED_BY';
const setPostsSortedByCreator = (sort) => ({
    type: SET_POSTS_SORTED_BY,
    payload: {
        sort
    }
})

export {SET_POSTS_SORTED_BY, setPostsSortedByCreator};
