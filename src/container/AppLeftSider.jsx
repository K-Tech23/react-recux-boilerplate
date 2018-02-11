import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { appLeftSiderStyle } from './styles'
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Person from 'material-ui-icons/Person'
import Email from 'material-ui-icons/Email'
class AppLeftSider extends Component {
    render() {
        const { classes ,loginUserData } = this.props
        const avatar = require('../assets/avatar-placeholder.png')
        console.log(this.props.loginUserData,"props")
        return (
            // <div>
            <Paper className={classes.root} elevation={4}>
                <img src={avatar} alt="profile" className="profile_image" />

                <List component="nav" className="detail-list">
                    <ListItem button>
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText inset primary={loginUserData.userName} className="list-text" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Email/>
                        </ListItemIcon>
                        <ListItemText inset primary={loginUserData.email} />
                    </ListItem>
                </List>
            </Paper>
            // </div>
        );
    }
}

export default withStyles(appLeftSiderStyle)(AppLeftSider);
