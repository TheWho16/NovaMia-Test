import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppConteiner from './components/app';
import "./index.scss";
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <AppConteiner />
  </Provider>
  ,
  document.getElementById('root'));