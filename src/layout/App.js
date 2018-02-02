import React, { Component } from 'react';

import { fire, register, login } from '../firbase'
import { withStyles } from 'material-ui/styles';
import Routes from '../routes/routes'
import AppHeader from '../container/AppHeader'
import AppRightSider from '../container/AppRightSider'
import AppContent from '../container/AppContent'
import AppLeftSider from '../container/AppLeftSider'
import {appStyle} from './styles'
class App extends Component {


  componentWillMount() {

  }

  render() {
    const {classes} = this.props
    const reg = register
    const loginUser = login
    return (
      <div className={classes.root}>
        <AppHeader />
        <div className="appBody-div">

          <div className="appRightSider-div">
            <AppRightSider />
          </div>

          <div className="appContent-div">
            <AppContent />
          </div>

          <div className="appLeftSider-div">
            <AppLeftSider />
          </div>

        </div>
        {/* <Routes /> */}
      </div>
    );
  }
}

export default withStyles(appStyle)(App);
