import React from 'react'

import { Slide } from 'fullpage-react'

import { CHANGE_PANEL,
         CHANGE_SLIDE,
         TOGGLE_DRAWER_SIDE_MOBILE_OPEN } from 'constants/ActionTypes'
import { mapValues } from 'lodash'

export const NOW_PANEL = 'now'
export const PROJECTS_PANEL = 'projects'
export const BLOG_PANEL = 'blog'
export const ABOUT_PANEL = 'about'

export const NOW_SLIDE = 'now'

export const HORIZONTAL_SLIDER_NAME = 'horizontalSlider1'

import SemanticLife from 'components/SemanticLife'
import AboutPanel from 'components/about/AboutPanel'
import NowPanel from 'components/now/NowPanel'
import ProjectsPanel from 'components/projects/ProjectsPanel'
import BlogPanel from 'components/blog/BlogPanel'

// you need a principled, declared-once-and-imported-everywhere way of
// connecting indices and panel/card names;
// since this depends on the order in which we provide Slides in
// HorizontalSlides, you'll need to look at the declaration of HorizontalSlider too...

const HORIZONTAL_PANELS = {
  'life': <SemanticLife />,
  NOW_PANEL: <NowPanel />,
  PROJECTS_PANEL: <ProjectsPanel />,
  BLOG_PANEL: <BlogPanel />
}

export const horizontalSlides = (
  Object.values(HORIZONTAL_PANELS)
    .map(panel => <Slide> {panel} </Slide>))

// not bad... but that didn't do what you wanted -- you wanted to,
// in Actions.js,
// be able to provide a keyword instead of an index

// there's got to be a better way...
// come back to this when you're not so tired.

const initialNavigationState = {
  currentSlide: 3,
  currentPanel: NOW_PANEL,
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

    case TOGGLE_DRAWER_SIDE_MOBILE_OPEN:
      return Object.assign({}, state, {
        drawerSideMobileOpen: !state.drawerSideMobileOpen
      })

    default:
      return state
  }
}
