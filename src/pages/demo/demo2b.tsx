import React from 'react';
import { Card, InputNumber, Button } from 'antd';
import { observer } from 'mobx-react';
import { observable, computed, action } from 'mobx';
import styles from './style.less';

export interface Props {
}

@observer
export default class Demo2b extends React.Component<Props> {
  @observable v1 = 0;
  v2 = 0;
  @computed get v1x2() {
    return this.v1 * 2;
  }
  @computed get v2x2() {
    return this.v2 * 2;
  }
  @action.bound
  handleClick() {
    this.v1 += 1;
    this.v2 += 1;
  }
 
  render() {
    return (
      <div className={styles.demo2}>
        <Card title="react mobx方式" bordered={false} style={{ width: 300 }}>
          <p>v1: {this.v1}</p>
          <p>v2: {this.v2}</p>
          <p>v1 * 2: {this.v1 * 2}</p>
          <p>v2 * 2: {2 * this.v2}</p>
          <p>v1+v2: {this.v1 + this.v2}</p>

          <hr/>
          <p><span>v1(ob):</span>
            <InputNumber onChange={v => this.v1 = Number(v)} />
          </p>
          <p><span>v2(non ob):</span>
            <InputNumber onChange={v => this.v2 = Number(v)} />
          </p>
          <p>
            <Button onClick={this.handleClick} type="primary">action</Button>
          </p>
        </Card>
      </div>
    );
  }
}
 