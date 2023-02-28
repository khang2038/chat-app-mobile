import React from 'react';
import { Route, Routes } from 'react-router-native';
import routes from './routesPath';

const Router = () => {
  return (
    <Routes>
      {routes.map((item, index) => {
        const Component: React.FC = item.component;
        return (
          <Route key={index} path={item.path} element={<Component />}></Route>
        );
      })}
    </Routes>
  );
};

export default Router;
