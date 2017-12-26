import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSubApp } from 'actions/Actions'
import NowPanel from 'components/now/NowPanel'
import ProjectsPanel from 'components/projects/ProjectsPanel'
import AboutPanel from 'components/about/AboutPanel'
import BlogPanel from 'components/blog/BlogPanel'
// import {NOW_PANEL, PROJECTS_PANEL,
//         BLOG_PANEL, ABOUT_PANEL} from 'reducers/navigation'

import { PERSONAL_SUBAPP, BLOG_SUBAPP } from 'reducers/navigation'
import StatefulSlider from 'utils/StatefulSlider'
import NewBlogPanel from 'components/blog/NewBlogPanel'

function showCurrentSubApp ({currentSubApp}) {
  switch (currentSubApp) {
    case PERSONAL_SUBAPP:
      return <StatefulSlider />
    case BLOG_SUBAPP:
      return <NewBlogPanel />
    default:
      return <div>No panel matched...</div>
  }
}

const mapStateToProps = state => ({
  currentSubApp: state.navigation.currentSubApp
})

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators({changeSubApp}, dispatch)
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(showCurrentSubApp)
