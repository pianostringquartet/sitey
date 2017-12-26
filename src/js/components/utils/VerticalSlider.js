import React from 'react'
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react'

import IntroMessage from 'components/IntroMessage'

import HSlider from 'utils/HorizontalSlider'

import AboutPanel from 'components/AboutPanel'
import NowPanel from 'components/NowPanel'
import ProjectsPanel from 'components/ProjectsPanel'
import BlogPanel from 'components/BlogPanel'

const horizontalSlides = [
  <Slide> <NowPanel /> </Slide>,
  <Slide> <ProjectsPanel /> </Slide>,
  <Slide> <BlogPanel /> </Slide>
]
const theSlides = [
  <Slide> <IntroMessage /> </Slide>,
  <HorizontalSlider
    name={'horizontalSlider1'}
    infinite
    slides={horizontalSlides}
  />
]

const VerticalSlider = ({slides}) => (
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

export default () => <VerticalSlider slides={theSlides} />
