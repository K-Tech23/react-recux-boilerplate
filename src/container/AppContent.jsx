import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Routes from '../routes/routes'
import { appContentStyle } from './styles'
import Paper from 'material-ui/Paper';
import CreateCV from '../components/createCV'
import { connect } from 'react-redux'

class AppContent extends Component {
    render() {
        const { classes } = this.props

        return (
            <Paper className={classes.root} elevation={4}>
                {{
                    createCV: <CreateCV />,
                    // signup: <Signup />
                }[this.props.currentPage]}
            </Paper>
        );
    }
}
function stateToProps(state) {
    console.log(state, "state in app")
    return {
        activeUser: state.loginUser,
        currentPage: state.currentPage
    }
}
function disptachToProps(dispatch) {
    return {

    }
}
export default connect(stateToProps, disptachToProps)(withStyles(appContentStyle)(AppContent));


