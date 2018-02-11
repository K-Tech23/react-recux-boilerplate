import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'

import { createCVStyle } from './styles'
class CreateCV extends Component {
    render() {
        const { classes } = this.props

        return (
            <Paper className={classes.root} elevation={4}>
            Create CV
            </Paper>
        );
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
export default connect(stateToProps, disptachToProps)(withStyles(createCVStyle)(CreateCV));
