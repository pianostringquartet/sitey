import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setPanel } from 'actions/Actions'
import ClickableList from 'utils/ClickableList'
import Typography from 'material-ui/Typography';


const mbamURL = "https://www.mbam.qc.ca"
// const artTumblrURL = <need to make..>

const rossoURL = "https://it.wikipedia.org/wiki/Cristo_risorto_in_gloria"
const pontormoURL = "http://www.arttrav.com/florence/pontormo-visitation/"
const simpleMadeEasyURL = "https://www.infoq.com/presentations/Simple-Made-Easy"
const beatingTheAveragesURL = "http://www.paulgraham.com/avg.html"
const ladderOfAbstractionURL = "http://worrydream.com/LadderOfAbstraction/"

const CurrentlyList = ({actions}) => (
  <ClickableList
    items = {
      [
        {
          displayable: "travel ('Bonjour, hi')",
          callable: () => window.open(mbamURL)
        },
        {
          displayable: "painting and sketching",
          callable: () => console.log("Add link to Art Tumblr...")
        },
        {
          displayable: "dabbling in SPAs",
          callable: () => actions.setPanel('projects')
        },
      ]
    }
  />
)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({setPanel}, dispatch)
})

const CurrentlyListContainer = connect(
  null,
  mapDispatchToProps
)(CurrentlyList)


const LoveList = () => (
  <ClickableList
    items = {
      [
        {
          displayable: "Rosso",
          callable: () => window.open(rossoURL)
        },
        {
          displayable: "Pontormo",
          callable: () => window.open(pontormoURL)
        },
        {
          displayable: "Rich Hickey: Simple Made Easy",
          callable: () => window.open(simpleMadeEasyURL)
        },
        {
          displayable: "Paul Graham: Beating the Averages",
          callable: () => window.open(beatingTheAveragesURL)
        },
        {
          displayable: "Bret Victor: The Ladder of Abstraction",
          callable: () => window.open(ladderOfAbstractionURL)
        },
      ]
    }
  />
)


const NowPanel = () => (
  <div>
    <Typography type="display1">
      NOW
    </Typography>

    <p>
      <Typography>
        (This is a <a href="http://nownownow.com/about">Now page</a>.
          Now pages are cool now.)
      </Typography>
    </p>

    <Typography type="title">
      Currently wrapping up four months of:
    </Typography>
    <CurrentlyListContainer />

    <Typography type="title">
      Currently in love with:
    </Typography>
    <LoveList />
  </div>
)

export default NowPanel
