import * as React from 'react';
import { LoginStore } from 'stores/loginStore';
import { inject, observer } from 'mobx-react';

interface Props {
  loginStore: LoginStore;
}

@inject('loginStore')
@observer
class Home extends React.Component<Props> {
  render() {
    const heheImg = require('assets/images/hehe.jpg');
    return (
      <div>
        <img src={heheImg} alt="hehe"/>
        <span style={{ fontSize: '30px' }}>Hello {this.props.loginStore.userName}</span>
      </div>
    );
  }
}
export default Home;