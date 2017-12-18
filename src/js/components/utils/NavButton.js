import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});
// onClick={function() {actions.changePanel('BLOG_LIST_PANEL')}}>
// const BackToBlogButton = ({classes, actions}) => (
const NavButton = ({classes, callable}) => (
  <Button color="primary"
          className={classes.button}
          onClick={callable}>
    back to blog
  </Button>
)

export default withStyles(styles)(NavButton)
