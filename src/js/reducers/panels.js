import { CHANGE_PANEL } from '../constants/ActionTypes'

const NOW_PANEL = 'NOW_PANEL'
const PROJECTS_PANEL = 'PROJECTS_PANEL'
const BLOG_PANEL = 'BLOG_PANEL'
const CURRENT_POST_PANEL = 'CURRENT_POST_PANEL'


const initialPanel = {
  // currentPanel: 'NOW_PANEL'
  // currentPanel: 'PROJECTS_PANEL'
  // currentPanel: 'BLOG_PANEL'
  currentPanel: 'CURRENT_POST_PANEL',

  // this won't change
  panel_names: ['NOW_PANEL', 'PROJECTS_PANEL', 'BLOG_PANEL', 'CURRENT_POST_PANEL']
}

export default function panels(state = initialPanel, action) {
  switch (action.type) {

    case CHANGE_PANEL:
      return Object.assign({}, state, {
        // action's panel needs to be one of those defined above
        currentPanel: action.panel
      })

    default:
      return state
  }
}
