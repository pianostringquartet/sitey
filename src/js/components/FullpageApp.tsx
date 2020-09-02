import React from 'react'
import { Fullpage, HorizontalSlider, Slide } from 'fullpage-react'
import IntroMessage from 'components/IntroMessage'
import { HORIZONTAL_SLIDER_NAME, horizontalSlides } from '../navigation'


type Fixme = any;

const slides = [
  <Slide> <IntroMessage /> </Slide>, // vertical slide
  <HorizontalSlider // horizontal slides
    name={HORIZONTAL_SLIDER_NAME}
    infinite
    slides={horizontalSlides}
   />
]

const FullpageApp = ({slides} : Fixme) =>
  <Fullpage
    scrollSensitivity={7}
    touchSensitivity={7}
    scrollSpeed={500}
    hideScrollBars
    enableArrowKeys
    breakpoint={375}
    slides={slides}
  />

export default () => <FullpageApp slides={slides} />
