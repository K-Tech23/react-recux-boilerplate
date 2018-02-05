import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { loginStyle } from './styles'
import Button from 'material-ui/Button';
import { BrowserRouter as Link } from 'react-router-dom';
import { loginUser } from '../firbase'
import swal from 'sweetalert';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: "",
        }
        this.emailHandler = this.emailHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
        this.login = this.login.bind(this)
    }
    emailHandler(e) {
        console.log(e, "email")
        this.setState({
            email: e.target.value
        })

    }
    passwordHandler(e) {
        console.log(e.target.value, "password")
        this.setState({
            password: e.target.value
        })
    }
    login() {
        if (this.state.Username === '' || this.state.email === '' || this.state.password === '' || this.state.confirmPassword === '') {
            swal({
                title: "Oops!",
                text: "Filled the Form Completly!",
                icon: "error",
            });
        }else{

            let user = {
                email: this.state.email,
                password: this.state.password
            }
            loginUser(user);
            this.setState({
                email: '',
                password: ''
            },()=>{this.props.history.push('/home')})
        }
    }

    render() {
        console.log(this.state.email, "email")
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <h1>Login</h1>
                    <TextField
                    value={this.state.email}
                        error={false}
                        id="with-placeholder"
                        label="Email"
                        placeholder="Enter Your Email"
                        className="textField"
                        onChange={(e) => this.emailHandler(e)}
                    />

                    <TextField
                    value={this.state.password}
                        error={false}
                        id="with-placeholder"
                        label="Password"
                        className="textField"
                        placeholder="Enter Your Password"
                        type='password'
                        onChange={(e) => this.passwordHandler(e)}
                    />
                    <Button raised color="primary"
                        onClick={() => this.login()}
                    >
                        lOGIN
                    </Button>
                    {/* <Link to="/signup">Already have Account??</Link>  */}
                    <span className='createAccount-span' onClick={() => this.props.history.push('/signup')}>
                        Create an Account...
                    </span>

                </Paper>
            </div>
        );
    }
}
export default withStyles(loginStyle)(Login);
