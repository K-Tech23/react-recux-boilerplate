import React, { Component } from 'react';

import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { BrowserRouter as Link } from 'react-router-dom';
import { fire } from '../firbase'
import swal from 'sweetalert';
import MenuIcon from 'material-ui-icons/Menu';
//import style
import { appHeaderStyle } from './styles'



class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    show(){
        this.props.history.push('/signup')
        
    }
    logout() {
        fire.auth().signOut().then(() => {
            swal({
                title: "Logout!",
                text: "Good Bye!",
                icon: "success",
            });
            this.props.history.push('/')
        }
        )
    }


    render() {
        const { classes, currentLogin } = this.props;
        console.log(currentLogin, "login user")
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className='title'>
                            Title
                        </Typography>
                        {
                            currentLogin === null ?
                                <Button color="inherit" onClick={this.show.bind(this)}> Signup</Button>
                                :
                                <Button color="inherit" onClick={this.logout.bind(this)}>Logout</Button>

                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProp(state) {
    console.log(state.loginUser, "login statw")
    return {
        currentLogin: state.loginUser
    }
}
function mapDispatchToProp(dispatch) {
    return {

    }
}
export default connect(mapStateToProp, mapDispatchToProp)(withStyles(appHeaderStyle)(AppHeader));