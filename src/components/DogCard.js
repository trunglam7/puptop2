import React from 'react'

import './styles/DogCard.css'

const DogCard = ({voteAnimation, name, image}) => {
  return (
    <div className={'dog-card ' + voteAnimation} style={{backgroundImage: `url(${image})`}}>
        <p className='dog-name'>{name}</p>
    </div>
  )
}

export default DogCard