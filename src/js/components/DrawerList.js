import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changePanel } from '../actions/PostActions'
import ClickableList from 'utils/ClickableList'


const DrawerList = ({panel_names, actions}) => (
  <ClickableList
    items={
      panel_names.map(name => (
      {
        displayable: name,
        callable: () => actions.changePanel(name)
      }))
    }
  />
)

const mapStateToProps = state => ({
  panel_names: state.panels.panel_names
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({changePanel}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerList)
