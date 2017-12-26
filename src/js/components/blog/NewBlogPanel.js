import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, Icon, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'

import NavButton from 'utils/NavButton'

import PostsList from 'components/blog/PostsList'
import CurrentPost from 'components/blog/CurrentPost'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSubApp, returnToPersonalApp } from 'actions/Actions'
import { PERSONAL_SUBAPP, BLOG_SUBAPP } from 'reducers/navigation'

// <NavButton value={'back to chris.life'} callable={() => this.props.actions.changeSubApp(PERSONAL_SUBAPP)} />

// <CurrentPost/>



// actions.changeSubApp(PERSONAL_SUBAPP)
// use "stackable" to let first column show on top for mobile devices
const NewBlogPanel = ({actions}) => (
  <Grid container centered stackable columns={2} padded>

  <Grid.Column width={4}>
    <Segment>
    <Header color='purple'>
        <Icon name='hand peace' />
        BLOG
      </Header>
      <Header color='purple'>
      The Lived Experience of Programming
      </Header>
      </Segment>
    <NavButton
      value={'back to chris.life'}
      callable={() => actions.returnToPersonalApp()} />
        <PostsList />
  </Grid.Column>

  <Grid.Column>
    <CurrentPost />
  </Grid.Column>

  </Grid>
)

const NewBlogPa = () => (
  <CurrentPost />
  )


class NewBlog extends Component {
  state = {}
  handleContextRef = contextRef => this.setState({ contextRef })
  render() {
    const { contextRef } = this.state
    return (
      <Grid container centered columns={2}>

        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
              <Rail position='left' attached>
                <Sticky context={contextRef} offset={50} padding={50}>
                  <Header color='purple'>The Lived Experience of Programming</Header>
                  <NavButton
                    value={'back to chris.life'}
                    callable={() => this.props.actions.changeSubApp(PERSONAL_SUBAPP)} />

                  <PostsList />
                </Sticky>
              </Rail>
              <CurrentPost/>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeSubApp, returnToPersonalApp }, dispatch)
})

// export default NewBlogPanel
export default connect(
  null,
  mapDispatchToProps
)(NewBlogPanel)
