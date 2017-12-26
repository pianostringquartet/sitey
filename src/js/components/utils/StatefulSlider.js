import React from 'react'

import { Fullpage, HorizontalSlider, Slide } from 'fullpage-react'
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSlide } from 'actions/Actions'

import IntroMessage from 'components/IntroMessage'

import { HORIZONTAL_SLIDER_NAME, horizontalSlides } from 'reducers/navigation'

const theSlides = [
  <Slide> <IntroMessage /> </Slide>,
  <HorizontalSlider
    name={HORIZONTAL_SLIDER_NAME}
    infinite
    slides={horizontalSlides}
   />
]

const FullpageReact = ({slides}) => (
  <Fullpage
    scrollSensitivity={7}
    touchSensitivity={7}
    scrollSpeed={500}
    hideScrollBars
    enableArrowKeys
    breakpoint={375}
    slides={slides}
  />
)

// const mapStateToProps = state => ({
//   currentSlide: state.navigation.currentSlide // horizontal slide
// })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeSlide }, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(() => <FullpageReact slides={theSlides} />)
