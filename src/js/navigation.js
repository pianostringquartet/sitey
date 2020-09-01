import React from 'react';
import { Slide, Fullpage } from 'fullpage-react';
import About from 'components/About';
import Paintings from 'components/Paintings';
import Talks from 'components/Talks';
import RecentProject from 'components/RecentProject';

export const ABOUT = 'about';
export const PAINTINGS = 'paintings';
export const TALKS = 'talks';
export const RECENT = 'recent';

export const HORIZONTAL_SLIDER_NAME = 'horizontalSlider1';

const HORIZONTAL_SLIDES = {
  [ABOUT]: <About />,
  [RECENT]: <RecentProject />,
  [TALKS]: <Talks />,
  [PAINTINGS]: <Paintings />,
};

// TODO: Replace with programmatic, derived ordering
export const aboutNeighbors = {
  left: PAINTINGS,
  right: RECENT,
};

export const recentNeighbors = {
  left: ABOUT,
  right: TALKS,
};

export const talksNeighbors = {
  left: RECENT,
  right: PAINTINGS,
};

export const paintingsNeighbors = {
  left: TALKS,
  right: ABOUT,
};

export const slideNameToIndex = (slide) => (
  Object.keys(HORIZONTAL_SLIDES).indexOf(slide)
);

export const horizontalSlides = (
  Object.values(HORIZONTAL_SLIDES)
    .map((panel) => (
      <Slide>
        {' '}
        {panel}
        {' '}
      </Slide>
    )));

export const changeSlide = (horizontalSliderName, slide) => Fullpage.changeHorizontalSlide(
  horizontalSliderName,
  slideNameToIndex(slide),
);
