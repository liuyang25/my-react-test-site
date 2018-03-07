import React from 'react';
import { Button } from 'antd';
import { DemoStore } from 'stores/demoStore';
import { LogStore } from 'stores/logStore';
import { inject } from 'mobx-react';

export interface Props {
  logStore: LogStore;
  demoStore: DemoStore;
}

@inject('demoStore', 'logStore')
export default class Demo3 extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <p>this is page demo3</p>

        <p>click button to generate a log</p>
        <Button onClick={() => this.props.logStore.log = `hehe${Math.random()}`}>hehe</Button>
      </div>
    );
  }
}