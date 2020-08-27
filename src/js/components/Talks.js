// Replaces 'projects' with 'talks and blog'

import React from "react";
import { Grid, Header } from "semantic-ui-react";

import CenteringGrid from "utils/CenteringGrid";
import SlideNameTag from "utils/SlideNameTag";

// need to link to the hosted talks and/or blog posts
const abstractionLayerTalkSlides =
  "https://drive.google.com/file/d/1MCxrZi_p_UA3gCdmLn-PXP7RTuEUx2O9/view?usp=sharing";

const reduxSystemsTalkSlides =
  "https://drive.google.com/file/d/1kNqOEuD_R5njWF-U9vEHPi8Y-1HM7UQ0/view?usp=sharing";

const TalksSlide = () => (
  <Grid columns={2}>
    <SlideNameTag
      color="red"
      icon="hand spock"
      content="TALKS AND BLOG POSTS"
    />

    <Grid.Column>
      <Header>
        Abstraction layer: blog post, talk slides from Berlin Clojure Meetup
      </Header>
    </Grid.Column>

    <Grid.Column>
      <Header>
        Redux systems from 30k feet: blog post, talk slides from Berlin
        OpenTechSchool
        <Header.Subheader>Design decisions in redux systems</Header.Subheader>
      </Header>
      <Header.Subheader>
        experiences from re-frame, redux.js, Scala Diode, and writing a redux
        system for Dart/Flutter
      </Header.Subheader>
      <Header.Subheader>
        slides from Berlin Clojure Meetup group
        blog post
      </Header.Subheader>
    </Grid.Column>
  </Grid>
);

export default () => <CenteringGrid content={<TalksSlide />} />;
