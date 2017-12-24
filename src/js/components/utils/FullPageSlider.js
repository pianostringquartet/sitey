// import React from 'react'
// import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react'

// import LifeScroll from 'components/LifeScroll'

// // const { Fullpage, Slide, HorizontalSlider } = require('fullpage-react')

// // const fullPageOptions = {
// //   // for mouse/wheel events
// //   // represents the level of force required to generate a slide change on non-mobile, 10 is default
// //   scrollSensitivity: 7,

// //   // for touchStart/touchEnd/mobile scrolling
// //   // represents the level of force required to generate a slide change on mobile, 10 is default
// //   touchSensitivity: 7,
// //   scrollSpeed: 500,
// //   hideScrollBars: true,
// //   enableArrowKeys: true,
// //   breakpoint: 375 // Disable FullpageReact and get standard scroll behavior back when this breakpoint (or below) is reached
// // }

// const horizontalSliderProps = {
//   name: 'horizontalSlider1', // name is required
//   infinite: true // enable infinite scrolling
// }

// const horizontalSlides = [
//   <Slide> Slide 2.1 </Slide>,
//   <Slide> Slide 2.2 </Slide>
// ]
// horizontalSliderProps.slides = horizontalSlides

// const slides = [
//   <Slide> Slide 1 </Slide>,
//   <Slide> Slide 2 </Slide>
//   <HorizontalSlider {...horizontalSliderProps} />
// ]
// fullPageOptions.slides = slides

// // const FullPageSlider = <Fullpage {...fullPageOptions} />

// // const FullPageSlider = () => <Fullpage
// //   scrollSensitivity={7}
// //   touchSensitivity={7}
// //   scrollSpeed={500}
// //   hideScrollBars
// //   enableArrowKeys
// //   breakpoint={375}
// //   slides={slides}
// // />

// const FullPageSlider = ({items}) => <Fullpage
//   scrollSensitivity={7}
//   touchSensitivity={7}
//   scrollSpeed={500}
//   hideScrollBars
//   enableArrowKeys
//   breakpoint={375}
//   slides={items.map(item => (
//     <Slide key={item.id}>
//       {item.item}
//     </Slide>
//     ))}
// />

// export default FullPageSlider

// // this all works.
// // the problem was that you were returning the comp directly,
// // instead of a function that evals to the comp.
