import * as React from 'react';
import { blankIndex } from 'router/page_index';
import '../normalize.css';

export default class BlankLayout extends React.PureComponent {
  render() {
    return (
      <div>
        {blankIndex()}
      </div>
    );
  }
}