import React from 'react';
import { DemoStore } from 'stores/demoStore';
import { LogStore } from 'stores/logStore';
import { inject } from 'mobx-react';
import styles from './style.less';
import 'react-dat-gui/build/react-dat-gui.css';
import DatGui, { DatButton, DatNumber, DatString } from 'react-dat-gui';

export interface Props {
  logStore: LogStore;
  demoStore: DemoStore;
}

@inject('demoStore', 'logStore')
export default class Demo1a extends React.Component<Props> {
  state = this.props.demoStore.data;
  handleUpdate(data: any) {
    this.setState(data);
    this.props.demoStore.data = data;
  }
  render() {
    return (
      <div className={styles.demo3}>
        <p>demo3:修改demoStore数据<br/>使用computed逆向衍化一次性赋值</p>
        <DatGui style={{ position: 'initial', margin: 'auto' }} data={this.state} onUpdate={e => this.handleUpdate(e)}>
          <DatString path="testStr1" label="testStr1" />
          <DatString path="testStr2" label="testStr2" />
          <DatNumber path="obNum" label="obNum" min={0} max={9999} step={1} />
          <DatNumber path="nobNum" label="nobNum" min={0} max={9999} step={1} />
          <DatButton onClick={() => this.props.logStore.log = `${Math.random()}`} label="makelog">make log</DatButton>
        </DatGui>
      </div>
    );
  }
}