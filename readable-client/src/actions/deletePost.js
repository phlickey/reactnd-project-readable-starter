const DELETE_POST = 'DELETE_POST';
const deletePostCreator = (payload) => ({ type: DELETE_POST, payload });

export {deletePostCreator, DELETE_POST};
