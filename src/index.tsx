import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import historyReducer from 'stores/historyStore/historyReducer';
import { HistoryDispatchType } from 'stores/historyStore/history.types';
import currenciesReducer from 'stores/currenciesStore/currenciesReducer';

import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { CurrenciesDispatchType } from './stores/currenciesStore/currencies.types';

const reducers = combineReducers({ historyReducer, currenciesReducer });

const store: Store & {
  dispatch: HistoryDispatchType | CurrenciesDispatchType;
} = createStore(reducers, applyMiddleware(thunk));

/*
const store = createStore(reducers, applyMiddleware(thunk));
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
