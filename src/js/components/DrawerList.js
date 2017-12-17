import React from 'react';

import List, { ListItem } from 'material-ui/List';


// you can hardcode panels' text names...
// but shouldn't you ideally have this
// info in the store?
// or in constants?

const DrawerListItem = ({panel_name, actions}) => (
  <ListItem
    children={
      <a onClick={function() {actions.changePanel(panel_name)}}>
        {panel_name}
      </a>}
  />
)

// use Lodash!!
// function toClickableList({coll, actions}) {
//   // get an int list to use for keys
//   // then call: coll.map(item => <CompItem key item actions>))
// }


const DrawerList = ({panel_names, actions}) => (
  <List>
    {panel_names.map(panel_name =>
      <DrawerListItem
        key={Math.random()}
        panel_name={panel_name}
        actions={actions} />)}
  </List>
)

export default DrawerList
