import React from 'react'
import { connect } from 'react-redux'
import PostsList from 'components/blog/PostsList'
import CurrentPost from 'components/blog/CurrentPost'
import ReadPostPanel from 'components/blog/ReadPostPanel'
import Typography from 'material-ui/Typography'

import { Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

const DisplayPostOrList = ({isReading}) => (
  isReading ? <ReadPostPanel /> : <PostsList />
)

// const DisplayPostOrList = ({isReading}) => (
//   isReading ? <CurrentPost /> : <PostsList />
// )

const mapStateToProps = state => ({
  isReading: state.blog.isReading
})

const DisplayPostOrListContainer = connect(
  mapStateToProps
)(DisplayPostOrList)

// const BlogPanel = () => (
//   <div>
//     <Typography type='display1'>
//       BLOG
//     </Typography>
//     <DisplayPostOrListContainer />
//   </div>
// )

const BlogGrid = () => (
  <Grid columns={2}>

    <Grid.Row>
      <Header color='purple'>
        <Icon name='hand peace' />
        BLOG
      </Header>
    </Grid.Row>

    <Grid.Column>
      <Header as='h2'>BLOG</Header>
    </Grid.Column>
    <Grid.Column>
      <DisplayPostOrListContainer />
    </Grid.Column>
  </Grid>
)

// needs to be put on a grid
const BlogPanel = () => (
  <Grid
    container
    centered
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
   >
    <BlogGrid />
  </Grid>
)

// you'll want the blog to be a separate 'view',
// i.e. not a full page js view,
// since you want Up-Down to have a different meaning in the blog
// BUT STILL KEEP YOUR BLOG LOGIC, don't use e.g. blogspot,
// -- you worked hard to figure out the Firebase DB and Storage stuff!

// or, you at least want "reading a current post" to be a separate view

export default BlogPanel
