import * as types from './ActionTypes';
const YandexTranslator = require('yandex.translate');
const API_KEY = 'trnsl.1.1.20170511T134210Z.ba13a5c816af7d43.07eedaff1ac2ccdd1b9d87c9102b2672097cb14b';
const translator = new YandexTranslator(API_KEY);
const lng = 'ru';

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

const receiveTranslatedWord = (word,item) => ({
  type: types.RECEIVE_TRANSLATED_WORD,
  word,
  item
});

export function requestTranslatedWord(item) {
  return (dispatch) => {
    translator
      .translate(item.title,lng)
        .then((result)=>{
          dispatch(receiveTranslatedWord(result[0],item))
        })
        .catch((err) =>{
          dispatch(receiveTranslatedWord('Not a found',item));
        })
  };
}