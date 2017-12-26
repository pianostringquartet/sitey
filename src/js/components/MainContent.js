import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSubApp } from 'actions/Actions'

import StatefulSlider from 'utils/StatefulSlider'

import NowPanel from 'components/now/NowPanel'
import ProjectsPanel from 'components/projects/ProjectsPanel'
import AboutPanel from 'components/about/AboutPanel'
import BlogPanel from 'components/blog/BlogPanel'

import { PERSONAL_SUBAPP, BLOG_SUBAPP } from 'reducers/navigation'

function showCurrentSubApp ({currentSubApp}) {
  switch (currentSubApp) {
    case PERSONAL_SUBAPP:
      return <StatefulSlider />
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
