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
export default class Demo3 extends React.PureComponent<Props> {
  state = {
    testStr1: '',
    testStr2: '',
    obNum: 0, 
    nobNum: 0, 
  };
  handleUpdate(data: any) {
    this.setState(data);
    this.props.demoStore.data = data;
  }
  render() {
    return (
      <div className={styles.demo3}>
        <p>this is page demo3</p>
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