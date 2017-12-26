import * as ActionTypes from 'constants/ActionTypes'

import { slideNameToIndex } from 'reducers/navigation'
import { Fullpage } from 'fullpage-react'
const { changeHorizontalSlide } = Fullpage
// import { changeHorizontalSlide } from 'fullpage-react'

import { PERSONAL_SUBAPP } from 'reducers/navigation'

// Connecting to Firebase Database and Storage
// (See index.html for Firebase import.)
// var database = firebase.database()
// var storage = firebase.storage()
// var storageRef = storage.refFromURL('gs://posty-blog-app.appspot.com')

// WORKAROUND:
// Because Fullpage-react (a) does not expose state explicitly,
// but (b) does expose functions to mutate state,
// we treat Fullpage-react state mutations as *Redux-style side-effects.*
// This gives us the advantages of Redux's "reasoning via actions/events",
// even though we can't have Redux's "one place to look"-advantage.
export const changeSlide = (horizontalSliderName, slide) =>
  () => changeHorizontalSlide(horizontalSliderName, slideNameToIndex(slide))

export const toggleDrawerSideMobileOpen = () => (
  {
    type: ActionTypes.TOGGLE_DRAWER_SIDE_MOBILE_OPEN
  }
)

export const changeSubApp = subApp => (
  {
    type: ActionTypes.CHANGE_SUBAPP,
    subApp: subApp
  }
)

export const returnToPersonalApp = () =>
  function (dispatch) {
    // dispatch(changeSlide('horizontalSlider1', 0))
    dispatch(changeSubApp(PERSONAL_SUBAPP))
  }

export const setPanel = panel => (
  {
    type: ActionTypes.CHANGE_PANEL,
    panel: panel
  }
)

export const changePanel = panel =>
  function (dispatch) {
    dispatch(setPanel(panel))
    dispatch(toggleDrawerSideMobileOpen())
  }
