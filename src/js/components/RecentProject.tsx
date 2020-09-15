import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import CenteringGrid from 'utils/CenteringGrid';
import SlideNameTag from 'utils/SlideNameTag';

import { recentNeighbors } from '../navigation';

const landschaftenExplore = require('assets/landschaften_explore_2.png');
const landschaftenCompare = require('assets/landschaften_compare_2.png');
const cljsImage = require('assets/clojure_logo.png');
const haskellImage = require('assets/haskell_logo.jpg');

const cljsURL = 'http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs';
const haskellURL = 'https://www.haskell.org/';

const landschaftenGithubURL =
  "https://github.com/pianostringquartet/landschaften#landschaften-visual-explorer-for-paintings-and-their-concepts";
const landschaftenServiceGithubURL =
  "https://github.com/pianostringquartet/landschaften-service";


const CljsImage = () => (
  <Image src={cljsImage} href={cljsURL} target="_blank" />
);

const HaskellImage = () => (
  <Image src={haskellImage} href={haskellURL} target="_blank" />
);

const LandschaftenExploreImage = () => (
  <Image src={landschaftenExplore} href={landschaftenGithubURL} target="_blank" />
);

const LandschaftenCompareImage = () => (
  <Image
    src={landschaftenCompare}
    href={landschaftenServiceGithubURL}
    target="_blank"
  />
);


const projectsListItems = [
  {
    id: 0,
    header: 'sitey',
    description:
      'typescript, redux.js, firebase, fullpage.js, semantic-ui',
    url: 'https://github.com/pianostringquartet/sitey',
  },
  {
    id: 1,
    header: 'clarifai-clj',
    description: "Clojure library for Clarifai's Predict API",
    url: 'https://github.com/pianostringquartet/clarifai-clj',
  },
  {
    id: 2,
    header: 'burgmeier-scraping',
    description: 'simple, efficient webscraping in Python',
    url: 'https://github.com/pianostringquartet/burgmeier-scraping',
  },
  {
    id: 3,
    header: 'cardy',
    description: 'flashcard app in Clojure, Clojurescript, re-frame',
    url: 'https://github.com/pianostringquartet/cardy',
  },
];


// TODO: Use Semantic-UI-React's Item element for simpler, more readable layout
const RecentProject = () => (
  <Grid>
    <SlideNameTag color="orange" icon="hand spock" content="RECENT PROJECTS" />

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
                <Header.Subheader href={landschaftenGithubURL}>
                  visual explorer for paintings and their concepts
                </Header.Subheader>
              </Header>
              <Grid columns={2}>
                <Grid.Column>
                  <Header.Subheader href={landschaftenGithubURL}>
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
                <Header.Subheader href={landschaftenServiceGithubURL}>
                  service-backend for landschaften
                </Header.Subheader>
              </Header>
              <Grid columns={2}>
                <Grid.Column>
                  <Header.Subheader href={landschaftenServiceGithubURL}>
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

    {/* OTHER PROJECTS */}
    <Grid.Row>
      <Grid columns={4} divided>
        <Grid.Row>
          {projectsListItems.map((project) => (
            <Grid.Column key={project.id}>
              <Header href={project.url} target="_blank">
                {project.header}
                <Header.Subheader>{project.description}</Header.Subheader>
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