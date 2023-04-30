import React from 'react'

import './styles/RankingCard.css'

const RankingCard = ({name, image, place}) => {
  return (
    <div className='rank-card-container'>
        <p>{place}</p>
        <img className='dog-img' src={image} alt='dog' />
        <p>{name}</p>
    </div>
  )
}

export default RankingCard