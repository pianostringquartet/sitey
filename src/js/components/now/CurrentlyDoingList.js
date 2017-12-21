import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ClickableList from 'utils/ClickableList'
import { PROJECTS_PANEL } from 'reducers/navigation'
import { setPanel } from 'actions/Actions'

const mbamURL = 'https://www.mbam.qc.ca'
const artTumblrURL = 'https://ccbilder.tumblr.com/'

const CurrentlyDoingList = ({actions}) => (
  <ClickableList
    items={
    [
      {
        displayable: 'travel ("Bonjour, hi")',
        callable: () => window.open(mbamURL)
      },
      {
        displayable: 'painting and sketching',
        callable: () => window.open(artTumblrURL)
      },
      {
        displayable: 'dabbling in SPAs',
        callable: () => actions.setPanel(PROJECTS_PANEL)
      }
    ]
    }
  />
)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({setPanel}, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(CurrentlyDoingList)
