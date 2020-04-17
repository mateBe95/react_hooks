import React from 'react';
import { Layout } from 'antd';
import './AppContent.scss';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routing';

const { Content } = Layout;
export default function AppContent() {
  return (
    <>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: '100vh',
        }}
      >
        <Switch>
          {routes.map((route: any, index: number) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Content>
    </>
  );
}
