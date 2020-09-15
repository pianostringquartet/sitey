import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import CenteringGrid from "utils/CenteringGrid";
import SlideNameTag from "utils/SlideNameTag";

import { paintingsNeighbors } from "../navigation";

const riverBendImage = require("assets/chatfield-river-bend.jpg");
const southValleyParkImage = require("assets/south-valley-park.jpg");
const portraitClassImage = require("assets/portrait-class.jpg");

const RiverBendImage = () => (
  <Image
    inline
    spaced
    src={riverBendImage}
    href={InstagramLink}
    target="_blank"
  />
);

const SouthValleyParkImage = () => (
  <Image
    inline
    spaced
    src={southValleyParkImage}
    href={InstagramLink}
    target="_blank"
  />
);

const PortraitClassImage = () => (
  <Image
    inline
    spaced
    src={portraitClassImage}
    href={InstagramLink}
    target="_blank"
  />
);

const InstagramLink = "https://www.instagram.com/christian.clampitt/";

const PaintingsSlide = () => (
  <Grid columns={2} relaxed>
    <SlideNameTag color="red" icon="hand spock" content="PAINTINGS" />
    <Grid.Column>
      <PortraitClassImage />
    </Grid.Column>
    <Grid.Column>
      <Image.Group size='medium'>
        <SouthValleyParkImage />
        <RiverBendImage />
      </Image.Group>
    </Grid.Column>
  </Grid>
);

export default () => (
  <CenteringGrid
    content={<PaintingsSlide />}
    leftSlide={paintingsNeighbors.left}
    rightSlide={paintingsNeighbors.right}
  />
);
