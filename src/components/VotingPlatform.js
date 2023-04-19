import React, { useContext } from 'react'
import {AiOutlineClose, AiFillHeart} from 'react-icons/ai'

import './styles/VotingPlatform.css'
import DogCard from './DogCard'
import { DogContext } from '../App'

const VotingPlatform = () => {

  const dogList = useContext(DogContext);

  return (
    <div className='voting-container'>
        <DogCard name={dogList[0].name} image={dogList[0].image}/>
        <div className='vote-btn-container'>
          <button className='vote-btn'><AiOutlineClose size={'3rem'} color='red'/></button>
          <button className='vote-btn'><AiFillHeart size={'3rem'} color='rgb(252, 121, 246)'/></button>
        </div>
    </div>
  )
}

export default VotingPlatform