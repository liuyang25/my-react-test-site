import * as React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

interface Page {
  name: string;
  component?: any; // page
  path?: string; // page
  exact?: boolean; // page ?
  icon?: string; // page pages?
  pages?: Page[]; // pages
}
import Home from 'pages/home';
import Demo from 'pages/demo/demo';
import Demo1 from 'pages/demo/demo1';
import Demo2 from 'pages/demo/demo2';
import Page404 from 'pages/404';

export const mainPages: Page[] = [
  {
    component: Home,
    name: '首页',
    path: '/home',
    icon: 'home'
  },
  {
    component: Demo,
    name: 'Demo',
    path: '/demo',
    icon: 'pie-chart',
  },
  {
    name: 'submenuDemo',
    icon: 'team',
    pages: [
      {
        component: Demo1,
        name: 'subDemo1',
        path: '/demo1',
      },
      {
        component: Demo2,
        name: 'subDemo2',
        path: '/demo2',
        icon: 'desktop',
      },
    ]
  }
];

export const blankPages = [
  {
    component: Page404,
    name: '404',
    path: '/404',
  },
];

function renderPages(pages: Page[], defaultPage?: string) {
  const pagesNode = Array<JSX.Element>();
  const renderPage = page => {
    if ( !page.pages) {
      pagesNode.push(<Route key={page.path} exact={page.exact} path={page.path} component={page.component} />);
    } else {
      page.pages.forEach(renderPage);
    }
  };
  pages.forEach(renderPage);

  return (
    <Switch>
      {pagesNode}
      {defaultPage && <Redirect to={defaultPage} />}
    </Switch>
  );
}
export function mainIndex() {
  return renderPages(mainPages, '/home');
}

export function blankIndex() {
  return renderPages(blankPages, '/404');
}