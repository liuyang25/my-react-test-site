import * as React from 'react';

const src = '/jqueryMobx/frame.html';
export default class JqueryDemo extends React.PureComponent {
  render() {
    return (
      <div id="p5" style={{textAlign: 'left'}}>
        <p>mobx + jquery</p>
        <iframe src={src} width="950px" height="580px"/>
      </div>
    );
  }
} 