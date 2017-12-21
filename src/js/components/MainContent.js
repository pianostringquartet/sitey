import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changePanel } from 'actions/Actions'
import NowPanel from 'components/now/NowPanel'
import ProjectsPanel from 'components/projects/ProjectsPanel'
import AboutPanel from 'components/about/AboutPanel'
import BlogPanel from 'components/blog/BlogPanel'
import {NOW_PANEL, PROJECTS_PANEL,
        BLOG_PANEL, ABOUT_PANEL} from 'reducers/navigation'

function showCurrentPanel ({currentPanel}) {
  switch (currentPanel) {
    case NOW_PANEL:
      return <NowPanel />
    case PROJECTS_PANEL:
      return <ProjectsPanel />
    case BLOG_PANEL:
      return <BlogPanel />
    case ABOUT_PANEL:
      return <AboutPanel />
    default:
      return <div>No panel matched...</div>
  }
}

const mapStateToProps = state => ({
  currentPanel: state.navigation.currentPanel
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({changePanel}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showCurrentPanel)
