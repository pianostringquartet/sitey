import React from 'react'
import Typography from 'material-ui/Typography'
import VerticalGrid from 'utils/VerticalGrid'

const aboutPanelItems = [
  <Typography type='display1'>ABOUT</Typography>,
  <Typography>My name is Chris. I'm a philosopher-turned-developer.</Typography>,
  <Typography>CV here.</Typography>,
  <Typography>Was born and raised in Colorado USA.</Typography>,
  <Typography>Have lived and worked in New York, South Korea, France, Boston.</Typography>,
  <Typography>Ich ziehe im Januar 2018 nach Berlin um.</Typography>
]

const AboutPanel = () => <VerticalGrid items={aboutPanelItems} />

// const AboutPanel = () => (
//   <div>
//     <Typography type='display1'>
//       ABOUT
//     </Typography>

//     <p>
//       <Typography>
//       My name is Chris. I'm a philosopher-turned-developer.
//       <div>
//         CV here.
//       </div>
//         <div>
//         Was born and raised in Colorado USA.
//       </div>
//         <div>
//         Have lived and worked in New York, South Korea, France, Boston.
//       </div>
//         <div>
//         Ich ziehe im Januar 2018 nach Berlin um.
//       </div>
//       </Typography>
//     </p>
//   </div>
// )

export default AboutPanel
