import React, { Component } from 'react';

import { fire } from '../firbase'
import { withStyles } from 'material-ui/styles';
import AppHeader from '../container/AppHeader'
import AppRightSider from '../container/AppRightSider'
import AppContent from '../container/AppContent'
import AppLeftSider from '../container/AppLeftSider'
import { appStyle } from './styles'
import { connect } from 'react-redux'
import Middleware from '../store/middleware/middleware'
class App extends Component {


  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user, "login user")
        this.props.loginUser(user)
      } else {
        console.log(user, "no user login")
        this.props.loginUser(null)
      }
    })
  }

  render() {
    const { classes } = this.props
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

function stateToProps(state) {
  return {

  }
}
function disptachToProps(dispatch) {
  return {
    loginUser: function (value) {
      return dispatch(Middleware.asyncRegister(value))
    }
  }
}
export default connect(stateToProps, disptachToProps)(withStyles(appStyle)(App));
