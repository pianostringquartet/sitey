import React from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360
  }
})

// displayable: str
// callable: fn
const ClickableListItem = ({displayable, callable}) => (
  <ListItem
    children={
      <a onClick={function () { callable() }}
      >
        <ListItemText
          primary={displayable}
          style={{cursor: 'pointer'}}
        />
      </a>}
  />
)

const ClickableList = ({items, classes}) => (
  <div className={classes.root}>
    <List>
      {
        items.map(item =>
          <ClickableListItem
            key={item.displayable} // assumes each displayable is unique
            displayable={item.displayable}
            callable={item.callable}
          />
        )
      }
    </List>
  </div>
)

export default withStyles(styles)(ClickableList)
