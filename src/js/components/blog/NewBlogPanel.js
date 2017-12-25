import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'

import PostsList from 'components/blog/PostsList'
import CurrentPost from 'components/blog/CurrentPost'


class StickyLayout extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>

              <CurrentPost/>

              <Rail position='left'>
                <Sticky bottomOffset={50} context={contextRef} offset={50}>
                  <Header>The Lived Experience of Programming</Header>
                  <PostsList />
                </Sticky>
              </Rail>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}


export default StickyLayout
