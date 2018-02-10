import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Routes from '../routes/routes'
import {appContentStyle} from './styles'


class AppContent extends Component {
    render() {
        return (
            <div>zxZX
              {/* <Routes/> */}
            </div>
        );
    }
}

export default withStyles(appContentStyle)(AppContent);

