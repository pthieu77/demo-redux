import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import {DATA} from './actions/data'
import todoApp from './reducers/reduscer'

const initialState = {
    mang: DATA
};
const store = createStore(todoApp, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
