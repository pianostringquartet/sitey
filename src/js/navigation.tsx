import React from 'react';
import { Slide, Fullpage } from 'fullpage-react';
import About from 'components/About';
import Paintings from 'components/Paintings';
import Talks from 'components/Talks';
import RecentProject from 'components/RecentProject';

export const ABOUT: string = 'about';
export const PAINTINGS: string = 'paintings';
export const TALKS: string = 'talks';
export const RECENT: string = 'recent';

export const HORIZONTAL_SLIDER_NAME: string = 'horizontalSlider1';

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

export const slideNameToIndex = (slide: string) => (
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

export const changeSlide = (horizontalSliderName: string, slide: string) => Fullpage.changeHorizontalSlide(
  horizontalSliderName,
  slideNameToIndex(slide),
);
