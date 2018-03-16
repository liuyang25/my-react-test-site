import * as React from 'react';

export default class P5Demo extends React.PureComponent {
  state = {
    src: '/p5/p5frame.html',
  };

  render() {
    return (
      <div id="p5" style={{textAlign: 'left'}}>
        <p>hehehe</p>
        <iframe src={this.state.src} width="720px" height="400px"/>
      </div>
    );
  }
} 