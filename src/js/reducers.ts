// import { combineReducers } from 'redux'
// // import { RETRIEVE_CV } from './ActionTypes'
// import RETRIEVE_CV  from './ActionTypes'



// // When i retrieve the CV from firebase, what format is it in?
// interface CVState {
//   cv: string
// };

// // assumption: the cv is just a Markdown-formatted text string
// const initialState: CVState = {
//   cv: '## Retrieving CV...'
// }


// type FixMe = any
// function cvReducer(state = initialState, action: FixMe): CVState {
//   switch (action.type) {
//     case RETRIEVE_CV:
//       return Object.assign({}, state, {
//         cv: {
//           id: 0,
//           content: action.content
//         }
//       })

//     default:
//       return state
//   }
// }

// // what is this combineReducers?

// // takes an object whose values are reducers; makes one big reducer
// // why do we need this? 
// export default combineReducers({
//   cv: cvReducer,
// })


// // const initialState = {
// //   cv: {
// //     id: 0,
// //     content: '## Retrieving CV...'
// //   }
// // }


// // function cvReducer (state = initialState, action) {
// //   switch (action.type) {
// //     case RETRIEVE_CV:
// //       return Object.assign({}, state, {
// //         cv: {
// //           id: 0,
// //           content: action.content
// //         }
// //       })

// //     default:
// //       return state
// //   }
// // }

// // // what is this combineReducers?

// // // takes an object whose values are reducers; makes one big reducer
// // // why do we need this? 
// // export default combineReducers({
// //   cv: cvReducer,
// // })
