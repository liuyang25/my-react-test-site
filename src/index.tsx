import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createRouter from './router/router';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import registerServiceWorker from './registerServiceWorker'; 
import './index.less';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    {createRouter()}
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker(); 