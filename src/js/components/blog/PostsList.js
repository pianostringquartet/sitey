import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateAndViewCurrentPost } from 'actions/Actions'
import ClickableList from 'utils/ClickableList'

import { List } from 'semantic-ui-react'

const SemanticClickableList = ({items}) => (
  <List>
    {items.map(item => (
      <List.Item
        key={item.displayable}
        onClick={item.callable}>
        {item.displayable}
      </List.Item>
    ))}
  </List>
)

const PostsList = ({posts, actions}) => (
  <SemanticClickableList
    items={
      posts.map(post => (
        {
          displayable: post.title,
          callable: () => actions.updateAndViewCurrentPost(post.id)
        }))
    }
  />
)

// const PostsList = ({posts, actions}) => (
//   <ClickableList
//     items={
//       posts.map(post => (
//         {
//           displayable: post.title,
//           callable: () => actions.updateAndViewCurrentPost(post.id)
//         }))
//     }
//   />
// )

const mapStateToProps = state => ({
  posts: state.blog.posts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({updateAndViewCurrentPost}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)
