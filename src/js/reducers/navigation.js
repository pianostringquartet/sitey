import { CHANGE_PANEL,
         TOGGLE_DRAWER_SIDE_MOBILE_OPEN } from 'constants/ActionTypes'

export const NOW_PANEL = 'now'
export const PROJECTS_PANEL = 'projects'
export const BLOG_PANEL = 'blog'
export const ABOUT_PANEL = 'about'

const initialNavigationState = {
  currentPanel: NOW_PANEL,
  // currentPanel: PROJECTS_PANEL,
  // currentPanel: BLOG_PANEL,
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
