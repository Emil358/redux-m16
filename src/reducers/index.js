const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      state.push({id: action.id, name: action.name, text: action.text, time: action.time})
      // localStorage.setItem('comments', JSON.stringify(state));
      console.log(state);
      return state;

    case 'DELETE_COMMENT':
      state.splice(action.id - 1, 1);
      console.log(state);
      // localStorage.setItem('comments', JSON.stringify(state));
      return state;

    default:
      return state;
  }
}

export default comments;