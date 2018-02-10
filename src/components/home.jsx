import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux'
import AppRightSider from '../container/AppRightSider'
import AppContent from '../container/AppContent'
import AppLeftSider from '../container/AppLeftSider'
import { homeStyle } from './styles'
import customHistory from '../history'

class Home extends Component {

    render() {

        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className="appBody-div">
                    <div className="appRightSider-div">
                        <AppRightSider />
                    </div>
                    <div className='appContent-div'>
                        <AppContent />
                    </div>
                    <div className="appLeftSider-div">
                        <AppLeftSider />
                    </div>
                </div>
            </div>
        )
    }


}
function stateToProps(state) {
    console.log(state, "state in app")
    return {
      activeUser: state.loginUser
    }
  }
  function disptachToProps(dispatch) {
    return {

    }
  }
export default connect(stateToProps, disptachToProps)(withStyles(homeStyle)(Home));
