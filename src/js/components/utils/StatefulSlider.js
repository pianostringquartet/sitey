import React from 'react'

import { Fullpage, HorizontalSlider, Slide } from 'fullpage-react'
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSlide } from 'actions/Actions'

import IntroMessage from 'components/IntroMessage'
import Life from 'components/Life'
import SemanticLife from 'components/SemanticLife'

import HSlider from 'utils/HorizontalSlider'

// import AboutPanel from 'components/about/AboutPanel'
// import NowPanel from 'components/now/NowPanel'
// import ProjectsPanel from 'components/projects/ProjectsPanel'
// import BlogPanel from 'components/blog/BlogPanel'

import { HORIZONTAL_SLIDER_NAME, horizontalSlides } from 'reducers/navigation'

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: -3,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true,
  enableArrowKeys: true,
  breakpoint: 375
}

// const horizontalSlides = [
//   <Slide> <SemanticLife /> </Slide>,
//   <Slide> <NowPanel /> </Slide>,
//   <Slide> <ProjectsPanel /> </Slide>,
//   <Slide> <BlogPanel /> </Slide>
// ]

const theSlides = [
  <Slide> <IntroMessage /> </Slide>,
  <HorizontalSlider
    name={HORIZONTAL_SLIDER_NAME}
    infinite
    slides={horizontalSlides}
   />
]

// const horizontalNavStyle = {
//   position: 'absolute',
//   width: '100%',
//   top: '50%',
//   zIndex: 10
// }

// right now, we navigate slides manually via calls to changeHSlide with some args
// ... you want to be able to
// where do you / does FullpageReact declare the 'current horizontal slide'?
// ... hm... can't find that...

// assume that the user will be on one of the H-Slides...

// problem: the h-slide state is being maintained within the horizontal slider component itself;
// Redux presumes that we're updating state....
// possible solutions:
//  1: directly call changeHorizontalSlide

// const firstHorizontalSlide = () => changeHorizontalSlide('horizontalSlider1', 0)
// const secondHorizontalSlide = () => changeHorizontalSlide('horizontalSlider1', 1)
// const thirdHorizontalSlide = () => changeHorizontalSlide('horizontalSlider1', 2)

// const horizontalNav = (
//       <div id='horizontal-nav' style={horizontalNavStyle}>
//         <span onClick={firstHorizontalSlide}>
//           <button>First H Slide</button>
//         </span>
//         <span onClick={secondHorizontalSlide}>
//           <button>Second H Slide</button>
//         </span>
//         <span onClick={thirdHorizontalSlide}>
//           <button>Third H Slide</button>
//         </span>
//       </div>
//     )
// {horizontalNav}

// class FullpageReact extends React.Component {
//   constructor (props) {
//     super(props) // to access this.props
//   }

//   render () {
//     const theSlides = [
//       <Slide> <IntroMessage /> </Slide>,
//       <HorizontalSlider
//         name={'horizontalSlider1'}
//         infinite
//         slides={horizontalSlides}
//       />
//     ]

//     fullPageOptions.slides = theSlides

//     return <Fullpage {...fullPageOptions} />
//   }
// }

const FullpageReact = ({slides}) => (
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

// export default FullpageReact

// for your own component, you'll only want to change which
// horizontal slide we're on

// export default FullpageReact

const mapStateToProps = state => ({
  currentSlide: state.navigation.currentSlide // horizontal slide
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeSlide }, dispatch)
})

// FullpageReactWithSlides =

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(() => <FullpageReact slides={theSlides} />)
