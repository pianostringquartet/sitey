import React from 'react'
import marked from 'marked'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

const createMarkup = (text) => (
  {__html: marked(text, {sanitize: true})})

const CVApp = ({ cv }) =>
  <div>
    <br /> <br />
    <Container>
      <span dangerouslySetInnerHTML={createMarkup(cv)} />
    </Container>
    <br /> <br /> <br />
  </div>

const mapStateToProps = state => ({
  cv: state.cv.cv.content
})

export default connect(mapStateToProps, null)(CVApp)
