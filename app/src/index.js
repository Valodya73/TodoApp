import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {Provider} from  'react-redux';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import Todo from './containers/Todo';
import reducers from  './reducers/Index';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(reducers, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <Provider  store={store}>
    <Todo />
  </Provider>, document.getElementById('root')
);
