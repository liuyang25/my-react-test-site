import * as React from 'react';
import { mainPages, mainIndex } from 'router/pages';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import { Link } from 'react-router-dom';

import styles from './style.less';

const logo = require('logo.svg');

export default class App extends React.PureComponent {
  state = {
    collapsed: false,
  };
  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    const renderMenu = page => {
      if (!page.pages) {
        return (
          <Menu.Item key={page.path} >
            {page.icon && <Icon type={page.icon} />}
            <span className={styles.menuText}><Link to={page.path}>{page.name}</Link></span>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={page.name}
            title={<span>
                {page.icon && <Icon type={page.icon} />}
                <span className={styles.menuText}>{page.name}</span>
            </span>}
            icon={page.icon}
          >
            {page.pages.map(renderMenu)}
          </SubMenu>
        );
      }
    };
    const menus = mainPages.map(renderMenu);

    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <span>Welcome to React</span>
        </div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              defaultSelectedKeys={['1']}
              mode="inline"
              style={{ textAlign: 'left' }}
              inlineCollapsed={this.state.collapsed}
            >
              {menus}
            </Menu>
            <div 
              className={styles.menuButton}
              onClick={() => this.onCollapse()}
            >
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </div>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              {mainIndex()}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              mail:liuyang25@126.com
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
