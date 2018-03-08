import React from 'react';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import { LogStore } from 'stores/logStore';
import { DemoStore } from 'stores/demoStore';
// import { observer } from 'mobx-react';
import styles from './style.less';

export interface Props {
  demoStore: DemoStore;
  logStore: LogStore;
}

// @observer
export default class Demo extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>this is page demo</p>
        <div className={styles.demo}>
          <Demo1 {...this.props}/>
          <Demo2 {...this.props}/>
        </div>
        <Demo3 {...this.props} />
      </div>
    );
  }
}