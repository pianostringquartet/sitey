import React from 'react'
import { Button } from 'semantic-ui-react'

const NavButton = ({value, callable}) => (
  <Button
    size='tiny'
    compact
    color='green'
    onClick={callable}

    label={value}
    icon='left arrow'
    labelPosition='right'
    />
)

// {/*content={value}*/}
export default NavButton

// import React from 'react'
// import { withStyles } from 'material-ui/styles'
// import Button from 'material-ui/Button'

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit
//   }
// })

// const NavButton = ({classes, value, callable}) => (
//   <Button color='primary'
//     className={classes.button}
//     onClick={callable}>

//   </Button>
// )

// export default withStyles(styles)(NavButton)
