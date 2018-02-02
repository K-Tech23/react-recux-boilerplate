import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import purple from 'material-ui/colors/purple';
import Login from '../components/login'
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
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default Routes;
