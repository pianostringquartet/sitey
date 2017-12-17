import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DrawerList from '../components/DrawerList'
// import { changePanel } from '../actions/NavigationActions'
import { changePanel } from '../actions/PostActions'

const mapStateToProps = state => ({
  panel_names: state.panels.panel_names
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({changePanel}, dispatch)
})

// inject the data-domain and the available events
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerList)
