import * as types from './ActionTypes';

console.log(types.ADD_TODO);

export const addTodoItem =  ((title,id)=>{
    return {
      type : types.ADD_TODO,
      title : title,
      id :id
    }
  });

export const compliteItem = ((item)=>{
    return {
      type: types.COMPLETE_TODO,
      element: item
    }
  });

export const removeItem = ((item)=>{
    return {
      type: types.REMOVE_TODO,
      element: item
    }
  });