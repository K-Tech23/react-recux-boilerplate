import React, { Component } from 'react';


import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
//import style
import { appHeaderStyle } from './styles'



class AppHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default withStyles(appHeaderStyle)(AppHeader);
