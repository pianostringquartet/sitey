import 'whatwg-fetch'
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'reducers'
import { syncPosts } from 'actions/Actions'
import Drawer from 'components/Drawer'
import ProfileAvatar from 'components/ProfileAvatar'
import DrawerList from 'components/DrawerList'
import MainContent from 'components/MainContent'

import IntroMessage from 'components/IntroMessage'
import LifeScroll from 'components/LifeScroll'

import AboutPanel from 'components/about/AboutPanel'
import NowPanel from 'components/now/NowPanel'
import ProjectsPanel from 'components/projects/ProjectsPanel'

import PaperSheet from 'components/utils/PaperSheet'
import FullPageSlider from 'components/utils/FullPageSlider'

import VerticalSlider from 'utils/VerticalSlider'

import Life from 'components/Life'
import SemanticLife from 'components/SemanticLife'

import StatefulSlider from 'utils/StatefulSlider'

import NewBlogPanel from 'components/blog/NewBlogPanel'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
)

// Initialize app
store.dispatch(syncPosts())

const appContents = [
  {
    id: -1,
    item: <IntroMessage />
  },
  {
    id: -2,
    item: <Life />
  },
  {
    id: 0,
    item: <PaperSheet item={<AboutPanel />} />

  },
  {
    id: 1,
    item: <PaperSheet item={<NowPanel />} />
  },
  {
    id: 2,
    item: <PaperSheet item={<ProjectsPanel />} />
  }
]

// { <FullPageSlider items={appContents} /> }
const PostyApp = () => (
  <div>
    <NewBlogPanel />
    {/* <StatefulSlider /> */}
    {/* <IntroMessage /> */}
    {/* { <SemanticLife /> } */}
    {/* <VerticalSlider /> */}
    {/* { <Life /> } */}

    {/* <LifeScroll items={appContents} /> */}

  </div>
)

// { <Drawer
//       appBarTitle='The Lived Experience of Programming'
//       drawerSideHeader={<ProfileAvatar />}
//       drawerSide={<DrawerList />}
//       drawerMain={<MainContent />}
//     /> }

render(
  <Provider store={store}>
    <PostyApp />
  </Provider>,
  document.getElementById('app')
)
