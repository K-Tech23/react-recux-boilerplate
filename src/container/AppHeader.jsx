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
import { fire } from '../firbase'
import swal from 'sweetalert';



class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.logout = this.logout.bind(this)
    }

    logout() {
        fire.auth().signOut().then(() => {
            swal({
                title: "Logout!",
                text: "Good Bye!",
                icon: "success",
            });
        })
    }
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
                        <Button color="inherit"
                        onClick={()=>this.logout()}
                        >Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default withStyles(appHeaderStyle)(AppHeader);
