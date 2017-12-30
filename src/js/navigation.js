import React from 'react'
import { Slide, Fullpage } from 'fullpage-react'
import About from 'components/About'
import Now from 'components/Now'
import Projects from 'components/Projects'

export const NOW = 'now'
export const PROJECTS = 'projects'
export const ABOUT = 'about'

export const HORIZONTAL_SLIDER_NAME = 'horizontalSlider1'

export const changeSlide = (horizontalSliderName, slide) => (
  Fullpage.changeHorizontalSlide(horizontalSliderName, slideNameToIndex(slide))
)

const HORIZONTAL_SLIDES = {
  [ABOUT]: <About />,
  [NOW]: <Now />,
  [PROJECTS]: <Projects />
}

export const slideNameToIndex = slide => (
  Object.keys(HORIZONTAL_SLIDES).indexOf(slide)
)

export const horizontalSlides = (
  Object.values(HORIZONTAL_SLIDES)
    .map(panel => <Slide> {panel} </Slide>))
