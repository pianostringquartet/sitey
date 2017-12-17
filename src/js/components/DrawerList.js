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
// you can hardcode panels' text names...
// but shouldn't you ideally have this
// info in the store?
// or in constants?

// {panel_name}
const DrawerListItem = ({panel_name, actions}) => (
  <ListItem
    children={
      <a onClick={function() {actions.changePanel(panel_name)}}>
        <ListItemText primary={panel_name} />

      </a>}
  />
)

// use Lodash!!
// function toClickableList({coll, actions}) {
//   // get an int list to use for keys
//   // then call: coll.map(item => <CompItem key item actions>))
// }

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
