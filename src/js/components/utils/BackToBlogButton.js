import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const BackToBlogButton = ({classes, actions}) => (
  <Button color="primary"
          className={classes.button}
          onClick={function() {actions.changePanel('BLOG_PANEL')}}>
    back to blog
  </Button>
)

export default withStyles(styles)(BackToBlogButton)
