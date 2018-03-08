import React from 'react';
import { Card } from 'antd';
import { LogStore } from 'stores/logStore';
import { observer, inject } from 'mobx-react';
import styles from './style.less';

export interface Props {
  logStore: LogStore;
}

@inject('logStore')
@observer
export default class Demo2 extends React.Component<Props> {
  render() {
    return (
      <div className={styles.demo2}>
        <Card title="this is page demo2" bordered={false} style={{ width: 300 }}>
          <p style={{textAlign: 'left'}}>log: {this.props.logStore.log}</p>
        </Card>
      </div>
    );
  }
}
