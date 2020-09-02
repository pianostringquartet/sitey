// Displaying your own paintings.

import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'

// this doesn't work? ... i didn't export from that About module?
// import artURL from 'About'

import CenteringGrid from 'utils/CenteringGrid'
import SlideNameTag from 'utils/SlideNameTag'

import { paintingsNeighbors } from "../navigation";

// import westFacingImage from 'assets/chatfield-river-west-facing.jpg'
// import riverBendImage from 'assets/chatfield-river-bend.jpg'
// import southValleyParkImage from 'assets/south-valley-park.jpg'
// import portraitClassImage from 'assets/portrait-class.jpg'

const westFacingImage = require('assets/chatfield-river-west-facing.jpg')
const riverBendImage = require('assets/chatfield-river-bend.jpg')
const southValleyParkImage = require('assets/south-valley-park.jpg')
const portraitClassImage = require('assets/portrait-class.jpg')

const WestFacingImage = () =>
    <Image inline spaced src={westFacingImage} href={InstagramLink} target='_blank' />

const RiverBendImage = () =>
    <Image inline spaced src={riverBendImage} href={InstagramLink} target='_blank' />

const SouthValleyParkImage = () =>
    <Image inline spaced src={southValleyParkImage} href={InstagramLink} target='_blank' />

const PortraitClassImage = () =>
    <Image flex spaced src={portraitClassImage} href={InstagramLink} target='_blank' />

// better? 
type Fixme = any;
const PaintingImage = ({ imageSrc }: Fixme) =>
    <Image inline spaced src={imageSrc} href={InstagramLink} target='_blank' />

const InstagramLink = 'https://www.instagram.com/christian.clampitt/'

// import riverBendImage from 'assets/chatfield-river-bend.jpg'
//  import southValleyParkImage from 'assets/south-valley-park.jpg'
//  import portraitClassImage from 'assets/portrait-class.jpg'

const PaintingsSlide = () =>
    <Grid columns={2} relaxed>
        <SlideNameTag color='red' icon='hand spock' content='PAINTINGS' />
        <Grid.Column>
            <SouthValleyParkImage />
            <WestFacingImage />
        </Grid.Column>

        <Grid.Column>
            <RiverBendImage />
            <Header>
                Come see more.
            </Header>
        </Grid.Column>
    </Grid>

export default () => (
  <CenteringGrid
    content={<PaintingsSlide />}
    leftSlide={paintingsNeighbors.left}
    rightSlide={paintingsNeighbors.right}
  />
);