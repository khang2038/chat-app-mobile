import React from "react";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

interface IRoute {
  path: string;
  private?: boolean;
  component: React.FC;
}

const routes: IRoute[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/Login',
    component: Login
  }
]

export default routes;