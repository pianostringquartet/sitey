import React from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

// item: a component
const PaperSheet = ({classes, item}) => (
  <div>
    <Paper className={classes.root} elevation={4}>
      {item}
    </Paper>
  </div>
)

export default withStyles(styles)(PaperSheet)

// function PaperSheet(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <Paper className={classes.root} elevation={4}>
//         <Typography type="headline" component="h3">
//           This is a sheet of paper.
//         </Typography>
//         <Typography component="p">
//           Paper can be used to build surface or other elements for your application.
//         </Typography>
//       </Paper>
//     </div>
//   );
// }
