import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const firstReducer = (state = 0, action) =>
{
  if (action.type === 'BUTTON_ONE') {
    console.log('Button One was clicked: ', state);
    return state + 1;
  }
  return state;
}

const secondReducer = (state = 100, action) =>
{
  if (action.type === 'BUTTON_TWO') {
    console.log('Button two was clicked: ', state);
    return state - 1;
  }
    return state;
}

const elementListReducer = (state = [], action) =>
{
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.payload];
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  firstReducer,
  secondReducer,
  elementListReducer,
  }),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.register();
