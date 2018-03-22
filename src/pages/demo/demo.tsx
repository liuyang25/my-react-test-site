import React from 'react';
import Demo1 from './demo1';
import Demo1a from './demo1a';
import Demo1b from './demo1b';
import Demo2 from './demo2';
import Demo2a from './demo2a';
import Demo2b from './demo2b';
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
    console.log(process.env);
    return (
      <div>
        <h1>this is demo page</h1>
        <div className={styles.demo}>
          <Demo1 {...this.props}/>
          <Demo1a {...this.props} />
          <Demo1b {...this.props} />
        </div>
        <Demo2 {...this.props} />
        <Demo2a {...this.props} />
        <Demo2b {...this.props} />
      </div>
    );
  }
}