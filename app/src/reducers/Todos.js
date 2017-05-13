import * as types from './../actions/ActionTypes';
let initialState = {list: []};

const Todos = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      var newList = state.list.slice();
      newList.push({
        title: action.title,
        isCompleted: false,
        id: action.id,
      });

      return Object.assign({}, state, {
        list: newList
      });
    case types.REMOVE_TODO:
      var newList = state.list.slice();
      var index = newList.indexOf(action.element);
      console.log('i n d e x', index);
      if(index > -1){
        newList.splice(index, 1);
      }

      return Object.assign({}, state, {
        list: newList
      });
    case 'COMPLETE_TODO':
      const array = state.list;
      array.forEach((i) => {
        if (i.id === action.element.id) {
          i.isCompleted = action.element.isCompleted;
          console.log(state.list)
        }
      });
      return Object.assign({}, state, {
        list: array,
      });
    case 'RECEIVE_TRANSLATED_WORD':
      var newList = state.list.slice();
      console.log(newList);
      newList.map((item) => {
        if(action.item === item) {
          item.translatedWord = action.word
        }
      });
      return Object.assign({}, state, {
        list: newList,
      });
    default:
      return state;
  }


};

export default Todos;