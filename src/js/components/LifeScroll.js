import React from 'react'
import { Parallax } from 'react-parallax'
import lifeScrollImage from '../../../public/assets/florence_2.jpg'

const LifeScroll = ({items}) => (
  <Parallax
    bgImage={lifeScrollImage}
    strength={400}>
    <br />
    {items.map(item =>
      <div key={item.id}>
        <br />
        {item.item}
        <br />
      </div>)}
  </Parallax>
)

export default LifeScroll
