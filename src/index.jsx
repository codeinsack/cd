import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import GlobalStyled from './GlobalStyled';
import disksCatalogReducer from './store/reducers/disksCatalog';
import filterReducer from './store/reducers/filter';
import diskReducer from './store/reducers/disk';

const composeEnhanters = process.env.NODE_ENV
=== 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  disksCatalog: disksCatalogReducer,
  filter: filterReducer,
  disk: diskReducer,
});

const store = createStore(rootReducer, composeEnhanters(
  applyMiddleware(thunk),
));

ReactDOM.render(
  <>
    <GlobalStyled />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root'),
);
