const DELETE_COMMENT = 'DELETE_COMMENT';
const deleteCommentCreator = (payload) => ({ type: DELETE_COMMENT, payload });

export {deleteCommentCreator, DELETE_COMMENT};
