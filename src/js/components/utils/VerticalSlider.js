import React from 'react'
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react'

import IntroMessage from 'components/IntroMessage'
import Life from 'components/Life'
import SemanticLife from 'components/SemanticLife'

import HSlider from 'utils/HorizontalSlider'

import AboutPanel from 'components/about/AboutPanel'
import NowPanel from 'components/now/NowPanel'
import ProjectsPanel from 'components/projects/ProjectsPanel'
import BlogPanel from 'components/blog/BlogPanel'

// const horizontalSlides = [
//   <Slide> <AboutPanel /> </Slide>,
//   <Slide> <NowPanel /> </Slide>,
  // {<Slide> <ProjectsPanel /> </Slide>}
// ]

const horizontalSlides = [
  <Slide> <SemanticLife /> </Slide>,
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

// what's the difference between a fn-componet
// that takes an argument directly vs. that takes props?
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

// export default () => VerticalSlider(theSlides)

export default () => <VerticalSlider slides={theSlides} />

// the comp that takes slides can be called e.g. VerticalSlider,
// but the resulting comp should just be called VerticalSlides
