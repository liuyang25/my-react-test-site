import * as React from 'react';
import './style.css';
import { mainIndex } from 'router/page_index';

const logo = require('logo.svg');

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        lalala
        </p>
        {mainIndex()}
      </div>
    );
  }
}
