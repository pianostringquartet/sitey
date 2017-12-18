import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

// import PostsListContainer from '../containers/PostsListContainer'

// import DrawerListContainer from '../containers/DrawerListContainer'
import DrawerList from 'components/DrawerList'

import ProfileAvatar from '../components/ProfileAvatar'
// import CurrentPostContainer from '../containers/CurrentPostContainer'


import BlogItemPanelContainer from '../containers/BlogItemPanelContainer'
import NowPanel from '../components/panels/NowPanel'
import ProjectsPanel from '../components/panels/ProjectsPanel'
import BlogListPanel from '../components/panels/BlogListPanel'
import AboutPanel from '../components/panels/AboutPanel'

// console.log("DrawerList in Drawer is: ")
// console.log(DrawerList)


const drawerWidth = 240;

// this needs to be separate and e.g. passed in to the Drawer


function showCurrentPanel(currentPanel) {
  switch (currentPanel) {
    case 'NOW_PANEL':
      return <NowPanel />
    case 'PROJECTS_PANEL':
      return <ProjectsPanel />
    case 'BLOG_LIST_PANEL':
      return <BlogListPanel />
    case 'CURRENT_POST_PANEL':
      // don't need panel per se, just the Container is enough
      return <BlogItemPanelContainer />
      // return <CurrentPostContainer />
    case 'ABOUT_PANEL':
      return <AboutPanel />
    default:
      return <NowPanel />
  }
}


const styles = theme => ({
  root: {
    width: '100%',

    // the height for the root class is setting
    // the absolute Drawer
    // height: 430,
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
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class ResponsiveDrawer extends React.Component {

  // when someone selects a post title,
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    // you'll want to also pass in
    // const { classes, theme } = this.props;
    const { classes, theme, currentPanel } = this.props;

    // and you probably want to pass this in, no?
    // contents
    const drawer = (
      <div>
        {/*<div className={classes.drawerHeader} />*/}
        <div className={classes.drawerHeader}>
          {/* okay, but you'll want to center this and provide Avatar image */}
          {/*DrawerName*/}
          <ProfileAvatar />
        </div>

        <Divider />

        {/*{<PostsListContainer />}*/}
        {/*<DrawerListContainer />*/}
        <DrawerList />

      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>

          {/* The top bar itself; doesn't change */}
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                The Lived Experience of Programming
              </Typography>
            </Toolbar>
          </AppBar>

        {/* logic for Drawer on mobile? */}
          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor='left'
              open={this.state.mobileOpen}
              classes={{paper: classes.drawerPaper,}}
              onRequestClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

        {/* logic for Drawer on desktop? */}
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

            {showCurrentPanel(currentPanel)}

          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
// {/*<CurrentPostContainer />*/}
