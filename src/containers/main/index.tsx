import * as React from 'react';
import { mainIndex } from 'router/page_index';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;

import styles from './style.less';

const logo = require('logo.svg');

export default class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <span>Welcome to React</span>
        </div>
        <p className={styles.appIntro}>
        lalala
        </p>
        {mainIndex()}
      </div>
    );
  }
}
