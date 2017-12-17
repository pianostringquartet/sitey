import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Drawer from '../components/Drawer'
// import * as PostActions from '../actions'
// import { changePanel } from '../actions/NavigationActions'
import { changePanel } from '../actions/PostActions'


const mapStateToProps = state => ({
  currentPanel: state.panels.currentPanel
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({changePanel}, dispatch)
})

// inject the data-domain and the available events
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer)
