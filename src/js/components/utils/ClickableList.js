// two dv comps: CList, CListItem
// ... which are then injected with the particular state and actions
// needed to work for BlogPanels' PostsList and SideBar's PanelsList

import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';

var _ = require('lodash');

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});


// const ClickableListItem = ({item, actions}) => (
//   <ListItem
//     children={
//       <a onClick={function() {actions.changePanel(item)}}>

//         <ListItemText primary={item} />
//       </a>}
//   />
// )

// const ClickableList = ({items, actions, classes}) => (
//   <div className={classes.root}>
//     <List>
//       {items.map(item =>
//         <ClickableListItem
//           key={Math.random()}
//           item={item}
//           actions={actions} />)}
//     </List>
//   </div>
// )




const ClickableListItem = ({displayable, callable}) => (
  <ListItem
    children={
      <a onClick={function() {callable()}}>
        <ListItemText primary={displayable} />
      </a>}
  />
)

// const ClickableList = ({items, actions, classes}) => (
const ClickableList = ({items, classes}) => (
  <div className={classes.root}>
    <List>
      {
        items.map(item =>
          <ClickableListItem
            key={Math.random()}
            displayable={item.displayable}
            callable={item.callable}
          />
        )
      }
    </List>
  </div>
)


export default withStyles(styles)(ClickableList);
