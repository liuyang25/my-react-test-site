import React from 'react';
import { Card } from 'antd';
import { LogStore } from 'stores/logStore';
import { observer, inject } from 'mobx-react';

export interface Props {
  logStore: LogStore;
}

@inject('logStore')
@observer
export default class Demo2 extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Card title="this is page demo2" bordered={false} style={{ width: 300 }}>
          <p style={{textAlign: 'left'}}>log: {this.props.logStore.log}</p>
        </Card>
      </div>
    );
  }
}
