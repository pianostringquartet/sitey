import React from 'react'
import marked from 'marked'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { RootState, store } from '../store'


const createMarkup = (text: string) => (
  {__html: marked(text, {sanitize: true})});


// Can either define external type and use in signatures
interface CVAppsProps {
  cv: string
};

// Or derive type from a function
type Props = ReturnType<typeof mapStateToProps>;

// if we tried to use e.g. string-type instead of Props,
// TS warns us that string-type has no property 'cv' :-)
const CVApp = ({ cv }: Props) => (
  // const CVApp = (cv: any) => (
  <div>
    <br /> <br />
    <Container>
      <span dangerouslySetInnerHTML={createMarkup(cv)} />
    </Container>
    <br /> <br /> <br />
  </div>
);


// why state.cv.cv? ... we're accessing the cv-subpart of the state,
// and then from within that we access the cv-subpart's cv-property?
// const mapStateToProps = (state: RootState) => ({
//   cv: state.cv.cv,
// });
const mapStateToProps = (state: RootState) => ({ cv: state.cv.cv });

export default connect(mapStateToProps, null)(CVApp);

// const mapStateToProps = state => ({
//   cv: state.cv.cv.content
// })

// export default connect(mapStateToProps, null)(CVApp)

//  works
// const createMarkup = (text: any) => ({
//   __html: marked('## Fix me later', { sanitize: true }),
// });

// // blowing up whenever use the passed in argument
// function createMarkup  (text: string) {
//   console.log('createMarkup: text: ' + text);
//   console.log("createMarkup: text keys: " + Object.keys(text));
//   return {
//     __html: marked(text, { sanitize: true }),
//   };
// }


  // const createMarkup = (text) => (
//   {__html: marked(text, {sanitize: true})})
