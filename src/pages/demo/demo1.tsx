import React from 'react';
import { Card } from 'antd';
import { DemoStore } from 'stores/demoStore';
import { inject } from 'mobx-react';
import styles from './style.less';

export interface Props {
  demoStore: DemoStore;
}

@inject('demoStore')
export default class Demo1 extends React.PureComponent<Props> {
  render() {
    return (
      <div className={styles.demo1}>
        <Card title="this is page demo1" bordered={false} style={{ width: 300 }}>
          <p>test Str1:<span>{this.props.demoStore.testStr1}</span></p>
          <p>test Str2:<span>{this.props.demoStore.testStr2}</span></p>
          <p>test computedNum1:<span>{this.props.demoStore.computedNum1}</span></p>
          <p>test computedNum2:<span>{this.props.demoStore.computedNum2}</span></p>
        </Card>
      </div>
    );
  }
}