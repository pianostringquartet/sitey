import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// I shouldn't need any state for db, right?
// I just need dispatch logic

// const AddPost = ({actions}) => (
//   <div>
//   <button onClick={actions.addPost}
//     >
//     New post
//   </button>
//   </div>

// )


// now make AddPost use an HTML form;
// don't use redux-forms; that's probably overkill
// just use the todo-input as an example
// and use a class-based component's props for local state

// how to do this:
// https://reactjs.org/docs/forms.html

export default class AddPost extends Component {

  state = {
    title: this.props.title || '',
    content: this.props.content || '',
    // just acces
    actions: this.props.actions
  }

  handleTitleChange = e => {
    this.setState({title: e.target.value})
  }

  handleContentChange = e => {
    this.setState({content: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.state.actions.addPost(this.state.content)
    this.state.actions.addPost(this.state.title, this.state.content)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            autoFocus="true"
            placeholder="New post title"
            onChange={this.handleTitleChange}/>
          <div>
            <textarea
              value={this.state.content}
              placeholder="New post body"
              onChange={this.handleContentChange}/>
          </div>

        <input type="submit" value="Submit" />
      </form>
    )
  }

}


{/*<input
      type="text"
      placeholder="I am a placeholder value!"
      autoFocus="true"
      value={this.state.content}
      onBlur={this.handleBlur}
      onChange={this.handleChange}
      onKeyDown={this.handleSubmit}/>*/}
