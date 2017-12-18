import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const NavButton = ({classes, callable}) => (
  <Button color="primary"
          className={classes.button}
          onClick={callable}>
    back to blog
  </Button>
)

export default withStyles(styles)(NavButton)
