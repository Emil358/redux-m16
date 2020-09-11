const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log([...state, {id: action.id, name: action.name, text: action.text, time: action.time}]);
      localStorage.setItem('comments', JSON.stringify([...state, {id: action.id, name: action.name, text: action.text, time: action.time}]));
      return [...state, {id: action.id, name: action.name, text: action.text, time: action.time}];

    case 'DELETE_COMMENT':
      let index;
      for (let i = 0 ; i < state.length; i++) {
        if(state[i].id === action.id){
          index = i
        }
      }
      let newState;
      if (state.length - 1 !== index){
        newState = state;
        newState = newState.slice(-(newState.length-index - 1));
        state = state.slice(0, index);
        newState = state.concat(newState);
      } else {
        state = state.slice(0, index);
        newState = state;
      }
      console.log(newState);
      localStorage.setItem('comments', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
}

export default comments;