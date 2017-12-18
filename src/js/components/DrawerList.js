import React from 'react';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const DrawerListItem = ({panel_name, actions}) => (
  <ListItem
    children={
      <a onClick={function() {actions.changePanel(panel_name)}}>
        <ListItemText primary={panel_name} />
      </a>}
  />
)

const DrawerList = ({panel_names, actions, classes}) => (
  <div className={classes.root}>
    <List>
      {panel_names.map(panel_name =>
        <DrawerListItem
          key={Math.random()}
          panel_name={panel_name}
          actions={actions} />)}
    </List>
  </div>
)

export default withStyles(styles)(DrawerList);
