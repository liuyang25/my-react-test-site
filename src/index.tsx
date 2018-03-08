import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createRouter from './router/router';
import { Provider } from 'mobx-react';
import stores from 'stores';
import registerServiceWorker from './registerServiceWorker'; 
import './index.less';

ReactDOM.render(
  <Provider {...stores}>
    {createRouter()}
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker(); 