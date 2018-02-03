import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { loginStyle } from './styles'
import Button from 'material-ui/Button';
import { BrowserRouter as Link } from 'react-router-dom';

class Login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <h1>Login</h1>
                    <TextField
                        error={false}
                        id="with-placeholder"
                        label="Email"
                        placeholder="Enter Your Email"
                        className="textField"
                    />

                    <TextField
                        error={false}
                        id="with-placeholder"
                        label="Password"
                        className="textField"                        
                        placeholder="Enter Your Password"
                        type='password'
                    />
                    <Button raised color="primary">
                        lOGIN
                    </Button>
                    {/* <Link to="/signup">Already have Account??</Link>  */}
                <span className='createAccount-span' onClick={()=>this.props.history.push('/signup')}>
                    Create an Account...
                    </span>

                </Paper>
            </div>
        );
    }
}
export default withStyles(loginStyle)(Login);
