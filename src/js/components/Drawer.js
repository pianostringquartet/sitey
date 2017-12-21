import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {toggleDrawerSideMobileOpen } from 'actions/Actions'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Hidden from 'material-ui/Hidden'
import Divider from 'material-ui/Divider'
import MenuIcon from 'material-ui-icons/Menu'
import { red } from 'material-ui/colors'

const drawerWidth = 240

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    backgroundColor: red[700],
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
})


/**
Render a 'drawer' (collapsible sidebar + main section) with provided content.

Takes the following content:
  - classes: CSS styling injected via withStyles
  - appBarTitle: str
  - drawerSideHeader: Component
  - drawerSide: Component
  - drawerMain: Component
*/
class ResponsiveDrawer extends React.Component {

  handleDrawerToggle = actions => actions.toggleDrawerSideMobileOpen

  render() {
    const { classes, theme,
            drawerSideMobileOpen, actions,
            appBarTitle, drawerSideHeader,
            drawerSide, drawerMain } = this.props

    const drawer = (
      <div>
        <div className={classes.drawerHeader}>
          {drawerSideHeader}
        </div>
        <Divider />
        {drawerSide}
      </div>
    )

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>

          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle(actions)}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                {appBarTitle}
              </Typography>
            </Toolbar>
          </AppBar>

          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor='left'
              open={drawerSideMobileOpen}
              classes={{paper: classes.drawerPaper,}}
              onRequestClose={this.handleDrawerToggle(actions)}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

          <main className={classes.content}>
          {drawerMain}
          </main>

        </div>
      </div>
    )
  }
}

const styledResponsiveDrawer = withStyles(styles, { withTheme: true })(ResponsiveDrawer)

const mapStateToProps = state => ({
  drawerSideMobileOpen: state.navigation.drawerSideMobileOpen
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({toggleDrawerSideMobileOpen}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledResponsiveDrawer)
