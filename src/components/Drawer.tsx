import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/Group';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import WorkIcon from '@material-ui/icons/Work';
import AccountBox from '@material-ui/icons/AccountBox';
import Notifications from '@material-ui/icons/Notifications';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

const NavDrawer = () => {
    return (
        <Drawer open anchor="left" variant="permanent">
        <div style={{width: 240}}></div>
            <List>
                <ListItem button key="dashboard">
                    <ListItemIcon><DashboardIcon className="font32px"/></ListItemIcon>
                    <ListItemText primary="Dashboard" secondary="this icon is bigger"/>
                </ListItem>
                <ListItem button key="organization">
                    <ListItemIcon><GroupIcon /></ListItemIcon>
                    <ListItemText primary="Organization"/>
                </ListItem>
                <ListItem button key="catalog">
                    <ListItemIcon><DeveloperBoardIcon /></ListItemIcon>
                    <ListItemText primary="Catalog"/>
                </ListItem>
                <ListItem button key="search">
                    <ListItemIcon><SearchIcon /></ListItemIcon>
                    <ListItemText primary="Search"/>
                </ListItem>
                <ListItem button key='job'>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText primary="Job"/>
                </ListItem>
                <ListItem button key='account'>
                    <ListItemIcon><AccountBox /></ListItemIcon>
                    <ListItemText primary="Acount"/>
                </ListItem>
                <ListItem button key='notifications'>
                    <ListItemIcon><Notifications /></ListItemIcon>
                    <ListItemText primary="Notifications"/>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default NavDrawer;