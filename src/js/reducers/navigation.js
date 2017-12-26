import React from 'react'

import { Slide } from 'fullpage-react'
import SemanticLife from 'components/SemanticLife'
import AboutPanel from 'components/about/AboutPanel'
import NowPanel from 'components/now/NowPanel'
import ProjectsPanel from 'components/projects/ProjectsPanel'
import BlogPanel from 'components/blog/BlogPanel'
import NewBlogPanel from 'components/blog/NewBlogPanel'

import { CHANGE_SUBAPP,
          CHANGE_PANEL,
         TOGGLE_DRAWER_SIDE_MOBILE_OPEN } from 'constants/ActionTypes'

export const NOW_PANEL = 'now'
export const PROJECTS_PANEL = 'projects'
export const BLOG_PANEL = 'blog'
export const ABOUT_PANEL = 'about'

export const BLOG_SUBAPP = 'blog_subapp'
export const PERSONAL_SUBAPP = 'personal_subapp'

export const NOW_SLIDE = 'now'

export const HORIZONTAL_SLIDER_NAME = 'horizontalSlider1'

const HORIZONTAL_PANELS = {
  [BLOG_PANEL]: <NewBlogPanel />,
  [NOW_PANEL]: <NowPanel />,
  [ABOUT_PANEL]: <SemanticLife />,

  [PROJECTS_PANEL]: <ProjectsPanel />

}

export const slideNameToIndex = slide => (
  Object.keys(HORIZONTAL_PANELS).indexOf(slide)
)

export const horizontalSlides = (
  Object.values(HORIZONTAL_PANELS)
    .map(panel => <Slide> {panel} </Slide>))

const initialNavigationState = {
  currentPanel: NOW_PANEL,
  // currentSubApp: BLOG_SUBAPP,
  currentSubApp: PERSONAL_SUBAPP,
  drawerSideMobileOpen: false,
  panel_names: [
    NOW_PANEL, PROJECTS_PANEL, BLOG_PANEL, ABOUT_PANEL
  ]
}

export default function panels (state = initialNavigationState, action) {
  switch (action.type) {
    case CHANGE_PANEL:
      return Object.assign({}, state, {
        currentPanel: action.panel
      })

    case CHANGE_SUBAPP:
      return Object.assign({}, state, {
        currentSubApp: action.subApp
      })

    case TOGGLE_DRAWER_SIDE_MOBILE_OPEN:
      return Object.assign({}, state, {
        drawerSideMobileOpen: !state.drawerSideMobileOpen
      })

    default:
      return state
  }
}
