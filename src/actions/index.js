// let nextCommentId = JSON.parse(localStorage.getItem('comments')) + 1;
let nextCommentId = 4
export const addComment = (name, text) => {

  const newTime = new Date();
  return {
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    name,
    text,
    time: `${newTime.getHours()}:${newTime.getMinutes() < 10 ? '0' + newTime.getMinutes() : newTime.getMinutes()}`
  }
}

export const deleteComment = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id
  }
}