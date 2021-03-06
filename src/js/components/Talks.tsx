import React from "react";
import { Grid, Header, Divider } from "semantic-ui-react";

import CenteringGrid from "utils/CenteringGrid";
import SlideNameTag from "utils/SlideNameTag";

import { talksNeighbors } from "../navigation";

const abstractionLayerBlogPost =
  "https://pianostringquartet.github.io/jekyll/update/2018/05/01/how-to-do-an-abstraction-layer.html";

const reduxSystemsTalkSlides =
  "https://drive.google.com/file/d/1kNqOEuD_R5njWF-U9vEHPi8Y-1HM7UQ0/view?usp=sharing";

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
      color="purple"
      icon="hand spock"
      content="TALKS AND BLOG POSTS"
    />

    {/* TALKS */}
    <Grid.Row>
      <Grid columns={2}>
        <Grid.Column>
          <Header size="large">
            How to write an abstraction layer
            <Header.Subheader>
              Solving problems with concepts, not just code.
            </Header.Subheader>
          </Header>

          <Header.Subheader>
            Lessons from writing API integrations at
            ProfitWell/PriceIntelligently:
          </Header.Subheader>

          <Header size="small" href={abstractionLayerBlogPost} color="blue">
            Read the blog post.
          </Header>
        </Grid.Column>

        <Grid.Column>
          <Header size="large">
            Redux systems from 30k feet
            <Header.Subheader>
              Design decisions in redux systems
            </Header.Subheader>
          </Header>
          <Header.Subheader>
            Lessons from re-frame, redux.js, and writing a redux system for
            Dart/Flutter:
          </Header.Subheader>
          <Header size="small" href={reduxSystemsTalkSlides} color="blue">
            View slides from the Berlin Clojure Meetup talk.
          </Header>
        </Grid.Column>
      </Grid>
    </Grid.Row>
    <Divider />

    {/* INSPIRATIONS */}
    <Grid.Row>
      <Grid columns={3} divided>
        <Header>Inspirations:</Header>
        <Grid.Row>
          {projectsListItems.map((project) => (
            <Grid.Column key={project.id}>
              <Header
                href={project.url}
                target="_blank"
                color="green"
                size="medium"
              >
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