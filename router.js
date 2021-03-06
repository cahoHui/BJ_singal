import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { configProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import Login from './src/Login/Login'
import Home from './src/home/homePage'

export default function BasicRouter() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  )
}