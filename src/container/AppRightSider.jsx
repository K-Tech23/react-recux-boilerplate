import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import { appRightSiderStyle } from './styles'
class AppRightSider extends Component {
    render() {
        const { classes } = this.props

        return (
            <Paper className={classes.root} elevation={4}>
            </Paper>
        );
    }
}

export default withStyles(appRightSiderStyle)(AppRightSider);
