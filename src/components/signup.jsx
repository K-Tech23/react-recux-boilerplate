import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
// import { BrowserRouter as Link } from 'react-router-dom';
import { signupStyle } from './styles'
import { signupUser } from '../firbase'
import swal from 'sweetalert';
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            email: '',
            password: "",
            confirmPassword: '',
            matchPassowrd: false,
            loading : false
        }
        this.usernameHandler = this.usernameHandler.bind(this)
        this.emailHandler = this.emailHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
        this.confirmPasswordHandler = this.confirmPasswordHandler.bind(this)
        this.signup = this.signup.bind(this)
    }
    usernameHandler(e) {
        console.log(e, "email")
        this.setState({
            email: e.target.value
        })

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
    confirmPasswordHandler(e) {
        console.log(e.target.value, "password")
        this.setState({
            confirmPassword: e.target.value
        }, () => {
            if (this.state.password === this.state.confirmPassword) {
                this.setState({ matchPassowrd: false })
            } else {
                this.setState({ matchPassowrd: true })
            }
        })
    }
    signup() {
        if (this.state.Username === '' || this.state.email === '' || this.state.password === '' || this.state.confirmPassword === '') {
            swal({
                title: "Oops!",
                text: "Filled the Form Completly!",
                icon: "error",
            });
        } else {
            Username = this.state.Username
            email = this.state.email
            password = this.state.password

            fire.auth().createUserWithEmailAndPassword(email, password).then((user) => console.log(user)).catch(err => console.log(err))
            // signupUser(user);
            this.setState({
                email: '',
                password: ''
            })
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <h1>Signup</h1>
                    <TextField
                        error={false}
                        id="with-placeholder"
                        label="Username"
                        placeholder="Enter Your Name"
                        className="textField"
                        onChange={(e) => this.usernameHandler(e)}

                    />
                    <TextField
                        error={false}
                        id="with-placeholder"
                        label="Email"
                        placeholder="Enter Your Email"
                        className="textField"
                        onChange={(e) => this.emailHandler(e)}

                    />

                    <TextField
                        error={false}
                        id="with-placeholder"
                        label="Password"
                        className="textField"
                        placeholder="Enter Your Password"
                        type='password'
                        onChange={(e) => this.passwordHandler(e)}

                    />
                    <TextField
                        error={this.state.matchPassowrd}
                        id="with-placeholder"
                        label="Confirm Password"
                        className="textField"
                        placeholder="Enter Your Password"
                        type='password'
                        onChange={(e) => this.confirmPasswordHandler(e)}

                    />
                    <Button raised color="primary"
                        onClick={() => this.signup()}
                    >
                        Signup
                    </Button>
                    <span className='alreadyLogin-span' onClick={() => this.props.history.push('/')}>
                        Already Have Account...?
                        </span>

                </Paper>
            </div>
        );
    }
}
export default withStyles(signupStyle)(Signup);
