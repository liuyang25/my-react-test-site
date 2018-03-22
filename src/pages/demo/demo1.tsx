import React from 'react';
import { Card } from 'antd';
import { DemoStore } from 'stores/demoStore';
import { LogStore } from 'stores/logStore';
import { inject, observer } from 'mobx-react';
import styles from './style.less';

export interface Props {
  demoStore: DemoStore;
  logStore: LogStore;
}

@inject('demoStore', 'logStore')
@observer
export default class Demo1 extends React.Component<Props> {
  render() {
    return (
      <div className={styles.demo1}>
        <Card
          title="demo1:观察demoStore数据变化"
          bordered={false}
          style={{ width: 300 }}
        >
          <p>test Str1:<span>{this.props.demoStore.testStr1}</span></p>
          <p>test Str2:<span>{this.props.demoStore.testStr2}</span></p>
          <p>test obNum:<span>{this.props.demoStore.computedNum1}</span></p>
          <p>test NonObNum:<span>{this.props.demoStore.computedNum2}</span></p>
          <p style={{textAlign: 'left'}}>log: {this.props.logStore.log}</p>
        </Card>
      </div>
    );
  }
}