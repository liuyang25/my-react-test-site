import * as React from 'react';
import { mainPages, mainIndex } from 'router/pages';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Layout, Menu, Icon, Input } from 'antd';
import LoginInfo from 'components/loginInfo';
import { LoginStore } from 'stores/loginStore';
import styles from './style.less';

interface Props {
  loginStore: LoginStore;
}

const logo = require('logo.svg');
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

@inject('loginStore')
@observer
export default class App extends React.Component<Props> {
  state = {
    collapsed: true,
    userNameInput: '',
  };
  userNameInputNode: any;
  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    // 侧边列表
    const renderMenu = page => {
      if (!page.pages) {
        return (
          <Menu.Item key={page.path} >
            <Link to={page.path} className={styles.menuText}>
              {page.icon && <Icon type={page.icon} />}
              <span className={styles.menuText}>
                {page.name}
              </span>
            </Link>
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

    // 输入名字框
    const renderLogin = () => {
      const suffix = this.state.userNameInput 
        ? <Icon
            type="close-circle"
            onClick={() => {
              this.setState({ userNameInput : '' });
              this.userNameInputNode.focus();
            }}
        />
        : null;
      return (
        <div style={{ height: '100vh', paddingTop: '10vh' }}>
          <Input
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={this.state.userNameInput}
            onChange={e => { this.setState({ userNameInput: e.target.value }); }}
            onPressEnter={() => { this.props.loginStore.userName = this.state.userNameInput; }}
            ref={node => this.userNameInputNode = node}
          />
        </div>
      );
    };

    return (
      <div className={styles.app}>
        <Layout style={{height: '100vh'}}>
          <Sider
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Link to="/home">
              <img src={logo} className={styles.appLogo} alt="logo" />
            </Link>
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
            <Header className={styles.appHeader}>
              <span>Welcome to React</span>
              <LoginInfo {...this.props} />
            </Header>
            <Content style={{ margin: '0 16px' }}>
              {this.props.loginStore.userName
                ? mainIndex()
                : renderLogin()
              }
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
