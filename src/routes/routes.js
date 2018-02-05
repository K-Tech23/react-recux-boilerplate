import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import purple from 'material-ui/colors/purple';

//import components
import Login from '../components/login'
import Signup from '../components/signup'
import Home from '../components/home'
const theme = createMuiTheme({
  palette: {
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

class Routes extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <div>
              <Route exact path="/" component={Login} />
              <Route  path="/signup" component={Signup} />
              <Route  path="/home" component={Home} />
              
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default Routes;
