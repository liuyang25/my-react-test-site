import React from 'react';
import { Card, InputNumber, Button } from 'antd';
import styles from './style.less';

export interface Props {
}

export default class Demo2a extends React.Component<Props> {
  state = {
    v1: 0,
  };
  v2 = 0;
  handleClick() {
    this.setState({ v1: this.state.v1 + 1 });
    this.v2 += 1;
  }

  render() {
    return (
      <div className={styles.demo2}>
        <Card title="react setState方式" bordered={false} style={{ width: 300 }}>
          <p>v1: {this.state.v1}</p>
          <p>v2: {this.v2}</p>
          <p>v1 * 2: {this.state.v1 * 2}</p>
          <p>v2 * 2: {2 * this.v2}</p>
          <p>v1+v2: {this.state.v1 + this.v2}</p>

          <hr/>
          <p><span>v1(state):</span>
            <InputNumber onChange={v => this.setState({ v1: v })} />
          </p>
          <p><span>v2(non state):</span>
            <InputNumber onChange={v => this.v2 = Number(v)} />
          </p>
          <p>
            <Button type="primary" onClick={() => this.handleClick()}>action</Button>
          </p>
        </Card>
      </div>
    );
  }
}
