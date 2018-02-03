import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import {appRightSiderStyle} from './styles'
class AppRightSider extends Component {
    render() {
        return (
            <div>
                App Right Sider
            </div>
        );
    }
}

export default withStyles(appRightSiderStyle)(AppRightSider);
