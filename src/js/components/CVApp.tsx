import React from 'react'
import marked from 'marked'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { RootState, store } from '../store'

const createMarkup = (text: string) => (
  {__html: marked(text, {sanitize: true})});

type Props = ReturnType<typeof mapStateToProps>;

const CVApp = ({ cv }: Props) => (
  <div>
    <br /> <br />
    <Container>
      <span dangerouslySetInnerHTML={createMarkup(cv)} />
    </Container>
    <br /> <br /> <br />
  </div>
);

const mapStateToProps = (state: RootState) => ({ cv: state.cv.cv });

export default connect(mapStateToProps, null)(CVApp);