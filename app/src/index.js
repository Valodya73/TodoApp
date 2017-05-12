import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {Provider} from  'react-redux';
import {createStore,applyMiddleware} from 'redux';

import Todo from './containers/Todo';
import reducers from  './reducers/Index';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider  store={store}>
    <Todo />
  </Provider>, document.getElementById('root')
);
