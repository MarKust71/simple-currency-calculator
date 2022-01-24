import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import store from 'stores/store';

import reportWebVitals from './reportWebVitals';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>the tiny currency converter</title>
    </Helmet>
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
