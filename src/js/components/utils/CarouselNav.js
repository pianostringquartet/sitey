// similar to SlideNameTag,
// but shows all slide names at once; 
// active one in color, others greyed out
// click on a name will bring you to that slide

import { changeSlide } from '../navigation'

import { HORIZONTAL_SLIDER_NAME, NOW, PROJECTS } from '../navigation'


const CarouselNavigation = ({ currentSlide, allSlides })