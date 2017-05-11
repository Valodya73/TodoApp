import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  'react-redux';
import {createStore} from 'redux';

import Todo from './containers/Todo';
import reducers from  './reducers/Index';

const store = createStore(reducers);

ReactDOM.render(
  <Provider  store={store}>
    <Todo />
  </Provider>, document.getElementById('root')
);
