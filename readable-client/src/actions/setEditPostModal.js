const SET_EDIT_POST_MODAL = "SET_EDIT_POST_MODAL";
const setEditPostModalCreator = ({open, id=null})=>({
    type: SET_EDIT_POST_MODAL,
    payload: {open,id}
});

export {SET_EDIT_POST_MODAL, setEditPostModalCreator};
