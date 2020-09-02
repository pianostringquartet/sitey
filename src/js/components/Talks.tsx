// Replaces 'projects' with 'talks and blog'

import React from "react";
import { Grid, Header, Divider } from "semantic-ui-react";

import CenteringGrid from "utils/CenteringGrid";
import SlideNameTag from "utils/SlideNameTag";

import { talksNeighbors } from "../navigation";

// need to link to the hosted talks and/or blog posts
const abstractionLayerTalkSlides =
  "https://drive.google.com/file/d/1MCxrZi_p_UA3gCdmLn-PXP7RTuEUx2O9/view?usp=sharing";

const reduxSystemsTalkSlides =
  "https://drive.google.com/file/d/1kNqOEuD_R5njWF-U9vEHPi8Y-1HM7UQ0/view?usp=sharing";



//   'current loves'
// also add back the Bret Victor?
const projectsListItems = [
  {
    id: 0,
    header: "Rick Hickey: Simple Made Easy",
    description: "Building better systems.",
    url: "https://www.infoq.com/presentations/Simple-Made-Easy",
  },
  {
    id: 1,
    header: "Paul Graham: Beating the Averages",
    description: "Why your tools matter.",
    url: "http://www.paulgraham.com/avg.html",
  },
  {
    id: 2,
    header: "Trent McConaghy: AI, Blockchains, and Humanity",
    description: "Thinking about the future.",
    url: "https://vimeo.com/213989519",
  },
];



const TalksSlide = () => (
  <Grid>
    <SlideNameTag
      color="red"
      icon="hand spock"
      content="TALKS AND BLOG POSTS"
    />

    {/* TALKS ROW */}
    <Grid.Row>
      <Grid columns={2}>
        <Grid.Column>
          <Header>
            How to write an abstraction layer
          </Header>
          <Header.Subheader>
            Solving problems with concepts, not just code
          </Header.Subheader>
          <Header.Subheader>
            Lessons from writing API integrations at
            ProfitWell/PriceIntelligently
          </Header.Subheader>
          <Header.Subheader>
            Slides from talk at Berlin OpenTechSchool Meetup
          </Header.Subheader>
        </Grid.Column>

        <Grid.Column>
          <Header>
            Redux systems from 30k feet
          </Header>
          <Header.Subheader>Design decisions in redux systems</Header.Subheader>
          <Header.Subheader>
            experiences from re-frame, redux.js, Scala Diode, and writing a
            redux system for Dart/Flutter
          </Header.Subheader>
          <Header.Subheader>
            Slides from talk at Berlin Clojure Meetup
          </Header.Subheader>
        </Grid.Column>
      </Grid>
    </Grid.Row>
    <Divider />
    <Grid.Row>
      <Grid columns={3} divided>
        <Header>Inspirations:</Header>
        <Grid.Row>
          {projectsListItems.map((project) => (
            <Grid.Column key={project.id}>
              <Header href={project.url} target="_blank">
                {project.header}
                <Header.Subheader>{project.description} </Header.Subheader>
              </Header>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Grid.Row>
  </Grid>
);

export default () => (
  <CenteringGrid
    content={<TalksSlide />}
    leftSlide={talksNeighbors.left}
    rightSlide={talksNeighbors.right}
  />
);