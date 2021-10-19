import React from 'react';
import ReactDOM from 'react-dom';
import MainComp from './pages/Main';
import {BrowserRouter} from 'react-router-dom'
import moviesReducer  from '../src/redux/reducers/moviesReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const appStore = createStore(moviesReducer)

ReactDOM.render(
  <Provider store={appStore}>
  <BrowserRouter>
    <MainComp />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

