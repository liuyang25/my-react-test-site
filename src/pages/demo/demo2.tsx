import React from 'react';
import { Card, Input, Icon, Button } from 'antd';
import { LogStore } from 'stores/logStore';
import { DemoStore } from 'stores/demoStore';
import { observer, inject } from 'mobx-react';
import { observable, computed, action } from 'mobx';
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

  @observable v1: 0;
  @computed get v2() {
    return this.v1 * 2;
  }
  @action.bound
  handleClick() {
    this.v1 += 1;
  }

  constructor(props: Props) {
    super(props);
    this.v1 = 0;
  }

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
        <Card title="this is page demo2" bordered={false} style={{ width: 300 }}>
          <p style={{textAlign: 'left'}}>log: {this.props.logStore.log}</p>
          <p style={{textAlign: 'left'}}>v1: {this.v1}</p>
          <p style={{textAlign: 'left'}}>v2: {this.v2}</p>
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
        <Button onClick={this.handleClick}>test local variable</Button>
      </div>
    );
  }
}
