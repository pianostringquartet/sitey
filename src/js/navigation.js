import React from 'react'

import { Slide } from 'fullpage-react'

import AboutPanel from 'components/AboutPanel'
import NowPanel from 'components/NowPanel'
import ProjectsPanel from 'components/ProjectsPanel'
import BlogPanel from 'components/BlogPanel'

import { Fullpage } from 'fullpage-react'
const { changeHorizontalSlide } = Fullpage

export const NOW_PANEL = 'now'
export const PROJECTS_PANEL = 'projects'
export const BLOG_PANEL = 'blog'
export const ABOUT_PANEL = 'about'

export const HORIZONTAL_SLIDER_NAME = 'horizontalSlider1'

export const changeSlide = (horizontalSliderName, slide) => (
  changeHorizontalSlide(horizontalSliderName, slideNameToIndex(slide))
)

// whichever panel is first in this array
// will be shown immediately after 'intro message'
const HORIZONTAL_PANELS = {
  [ABOUT_PANEL]: <AboutPanel />,
  [NOW_PANEL]: <NowPanel />,
  [PROJECTS_PANEL]: <ProjectsPanel />
}

export const slideNameToIndex = slide => (
  Object.keys(HORIZONTAL_PANELS).indexOf(slide)
)

export const horizontalSlides = (
  Object.values(HORIZONTAL_PANELS)
    .map(panel => <Slide> {panel} </Slide>))

const initialNavigationState = {
  currentSlide: ABOUT_PANEL,
  panel_names: [
    NOW_PANEL, PROJECTS_PANEL, BLOG_PANEL, ABOUT_PANEL
  ]
}

export default function panels (state = initialNavigationState, action) {
  switch (action.type) {
    // case CHANGE_PANEL:
    //   return Object.assign({}, state, {
    //     currentPanel: action.panel
    //   })

    // case CHANGE_SUBAPP:
    //   return Object.assign({}, state, {
    //     currentSubApp: action.subApp
    //   })

    case UPDATE_CURRENT_SLIDE:
      console.log('UPDATE_CURRENT_SLIDE action!')
      return Object.assign({}, state, {
        currentSlide: action.currentSlide
      })

    // case TOGGLE_DRAWER_SIDE_MOBILE_OPEN:
    //   return Object.assign({}, state, {
    //     drawerSideMobileOpen: !state.drawerSideMobileOpen
    //   })

    default:
      return state
  }
}
