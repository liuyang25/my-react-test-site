import React from 'react';
import { Card, Input, Icon } from 'antd';
import { LogStore } from 'stores/logStore';
import { DemoStore } from 'stores/demoStore';
import { observer, inject } from 'mobx-react';
import styles from './style.less';

export interface Props {
  logStore: LogStore;
  demoStore: DemoStore;
}

@inject('logStore', 'demoStore')
@observer
export default class Demo2 extends React.Component<Props> {
  state = {
    test1Input: '',
    test2Input: '',
  };

  test1Node: any;
  test2Node: any;

  render() {
    const suffix1 = this.state.test1Input 
    ? <Icon
        type="close-circle"
        onClick={() => {
          this.setState({ test1Input : '' });
          this.test1Node.focus();
        }}
    />
    : null;
    const suffix2 = this.state.test2Input 
    ? <Icon
        type="close-circle"
        onClick={() => {
          this.setState({ test2Input : '' });
          this.test2Node.focus();
        }}
    />
    : null;

    return (
      <div className={styles.demo2}>
        <p>this is page demo2:<br/> 通过action修改demoStore的值</p>
        <Card bordered={false} style={{ width: 300 }}>
          <p style={{textAlign: 'left'}}>log: {this.props.logStore.log}</p>
          <Input
            placeholder="test set str1"
            prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix1}
            value={this.state.test1Input}
            onChange={e => { this.setState({ test1Input: e.target.value }); }}
            onPressEnter={() => { this.props.demoStore.setTestStr1(this.state.test1Input); this.setState({ test1Input: '' }); }}
            ref={node => this.test1Node = node}
          />
          <Input
            placeholder="test set str2"
            prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix2}
            value={this.state.test2Input}
            onChange={e => { this.setState({ test2Input: e.target.value }); }}
            onPressEnter={() => { this.props.demoStore.setTestStr2(this.state.test2Input); }}
            ref={node => this.test2Node = node}
          />
        </Card>
      </div>
    );
  }
}
