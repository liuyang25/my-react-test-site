import * as React from 'react';
import { LoginStore } from 'stores/loginStore';
import { inject, observer } from 'mobx-react';

interface Props {
  loginStore: LoginStore;
}

@inject('loginStore')
@observer
class Home extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <p>Hello {this.props.loginStore.userName}</p>
      </div>
    );
  }
}
export default Home;