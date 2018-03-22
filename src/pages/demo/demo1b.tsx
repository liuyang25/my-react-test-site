import React from 'react';
import { DemoStore } from 'stores/demoStore';
import { LogStore } from 'stores/logStore';
import { inject } from 'mobx-react';
import styles from './style.less';
import { Input, InputNumber } from 'antd';

export interface Props {
  logStore: LogStore;
  demoStore: DemoStore;
}

@inject('demoStore', 'logStore')
export default class Demo1b extends React.Component<Props> {
  state = this.props.demoStore.data;
  onChangeOb(value: number) {
    this.props.demoStore.obNum = value;
  }
  onChangeNob(value: number) {
    this.props.demoStore.nobNum = value;
  }
  onChange1(e: any) {
    this.props.demoStore.testStr1 = e.target.value;
  }
  onChange2(e: any) {
    this.props.demoStore.testStr2 = e.target.value;
  }

  render() {
    return (
      <div className={styles.demo3}>
        <p>demo3:修改demoStore数据<br/>单个变量改变</p>

        <p><span>testStr1:</span><Input onChange={(e) => this.onChange1(e)} /></p>
        <p><span>testStr2:</span><Input onChange={(e) => this.onChange2(e)}/></p>

        <p><span>obNum:</span>
          <InputNumber min={0} max={9999} defaultValue={this.props.demoStore.obNum} onChange={(v) => this.onChangeOb(Number(v))} />
        </p>
        <p><span>nobNum:</span>
          <InputNumber min={0} max={9999} defaultValue={this.props.demoStore.nobNum} onChange={(v) => this.onChangeNob(Number(v))} />
        </p>
      </div>
    );
  }
}