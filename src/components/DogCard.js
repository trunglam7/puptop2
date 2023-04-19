import React from 'react'

import './styles/DogCard.css'

const DogCard = ({name, image}) => {
  return (
    <div className='dog-card' style={{backgroundImage: `url(${image})`}}>
        <p className='dog-name'>{name}</p>
    </div>
  )
}

export default DogCard