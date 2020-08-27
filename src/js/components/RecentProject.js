// showcases landschaften project etc.

// need 1-2 screenshots of landschaften
// plus a side bar explaining L and L-service

import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";

import CenteringGrid from "utils/CenteringGrid";
import SlideNameTag from "utils/SlideNameTag";

import { recentNeighbors } from "../navigation";

import landschaftenExplore from "assets/landschaften_explore_2.png";
import landschaftenCompare from "assets/landschaften_compare_2.png";

import jsImage from "assets/js_logo.png";
import cljsImage from "assets/clojure_logo.png";
import haskellImage from "assets/haskell_logo.jpg";

const jsURL = "https://redux.js.org/";

const cljsURL =
  "http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs";

const ghostwheelURL = "https://github.com/gnl/ghostwheel";
const typescriptURL = "https://www.typescriptlang.org/";
const servantURL = "https://docs.servant.dev/en/stable/index.html";

const CljsImage = () => (
  <Image src={cljsImage} href={cljsURL} target="_blank" />
);

const JsImage = () => (
  <Image spaced src={jsImage} href={jsURL} target="_blank" />
);

const HaskellImage = () => <Image src={haskellImage} target="_blank" />;

const LandschaftenExploreImage = () => (
  <Image src={landschaftenExplore} target="_blank" />
);

const LandschaftenCompareImage = () => (
  <Image src={landschaftenCompare} target="_blank" />
);

const landschaftenGithubURL =
  "https://github.com/pianostringquartet/landschaften#landschaften-visual-explorer-for-paintings-and-their-concepts";

const projectsListItems = [
  {
    id: 0,
    header: "sitey",
    description:
      "personal site with Typescript, Redux, Firebase, Fullpage.js, Semantic-ui",
    url: "https://github.com/pianostringquartet/sitey",
  },
  {
    id: 1,
    header: "clarifai-clj",
    description: "Clojure library for Clarifai's Predict API",
    url: "https://github.com/pianostringquartet/clarifai-clj",
  },
  {
    id: 2,
    header: "burgmeier-scraping",
    description: "simple, efficient webscraping in Python",
    url: "https://github.com/pianostringquartet/burgmeier-scraping",
  },
  {
    id: 3,
    header: "cardy",
    description: "flashcard app in Clojure, Clojurescript, re-frame",
    url: "https://github.com/pianostringquartet/cardy",
  },
];

const RecentProject = () => (
  <Grid>
    <SlideNameTag color="red" icon="hand spock" content="RECENT PROJECTS" />
    {/* LANDSCHAFTEN ROW */}
    <Grid.Row>
      <Grid.Column width={16}>
        <Grid columns={2}>
          {/* top row: landschaften */}
          <Grid.Row>
            <Grid.Column>
              <LandschaftenExploreImage />
            </Grid.Column>
            <Grid.Column>
              <Header>
                landschaften
                <Header.Subheader>
                  visual explorer for paintings and their concepts
                </Header.Subheader>
              </Header>

              <Grid columns={2}>
                <Grid.Column>
                  <Header.Subheader>
                    Clojurescript, Leiningen, re-frame, ghostwheel (spec)
                  </Header.Subheader>
                </Grid.Column>
                <Grid.Column>
                  <Image.Group size="tiny">
                    <CljsImage />
                  </Image.Group>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>

          {/* bottom row: landschaften-service */}
          <Grid.Row>
            <Grid.Column>
              <LandschaftenCompareImage />
            </Grid.Column>
            <Grid.Column>
              <Header>
                landschaften-service
                <Header.Subheader>
                  service-backend for landschaften
                </Header.Subheader>
              </Header>

              {/* description and logo row */}
              <Grid columns={2}>
                <Grid.Column>
                  <Header.Subheader>
                    Haskell, Stack, Servant (api), postgres
                  </Header.Subheader>
                </Grid.Column>
                <Grid.Column>
                  <Image.Group size="tiny">
                    <HaskellImage />
                  </Image.Group>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      {/* MISC PROJECTS */}
      <Grid columns={4} divided>
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
    content={<RecentProject />}
    leftSlide={recentNeighbors.left}
    rightSlide={recentNeighbors.right}
  />
);