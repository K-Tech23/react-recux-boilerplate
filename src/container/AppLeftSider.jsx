import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import {appLeftSiderStyle} from './styles'

class AppLeftSider extends Component {
    render() {
        return (
            <div>
               App Left Sider
            </div>
        );
    }
}

export default withStyles(appLeftSiderStyle)(AppLeftSider);
