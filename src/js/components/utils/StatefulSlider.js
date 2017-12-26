import React from 'react'
import { Fullpage, HorizontalSlider, Slide } from 'fullpage-react'
import IntroMessage from 'components/IntroMessage'
import { HORIZONTAL_SLIDER_NAME, horizontalSlides } from '../../navigation'

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

export default () => <FullpageReact slides={theSlides} />
