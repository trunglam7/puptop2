import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineClose, AiFillHeart} from 'react-icons/ai'

import './styles/VotingPlatform.css'
import DogCard from './DogCard'
import { DogContext } from '../App'

const VotingPlatform = () => {

  const dogList = useContext(DogContext);
  const [voteAnimation, setVoteAnimation] = useState(null);
  const [dogToggle, setDogToggle] = useState(false);
  const [currDog, setCurrDog] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setVoteAnimation(null);
      setCurrDog(currDog + 1);
    }, 1000)
  }, [dogToggle])

  return (
    <div className='voting-container'>
        <DogCard voteAnimation={voteAnimation} name={dogList[currDog].name} image={dogList[currDog].image}/>
        <div className='vote-btn-container'>
          <button className='vote-btn' onClick={() => voteHandler('left')}><AiOutlineClose size={'3rem'} color='red'/></button>
          <button className='vote-btn' onClick={() => voteHandler('right')}><AiFillHeart size={'3rem'} color='rgb(3, 255, 192)'/></button>
        </div>
    </div>
  )

  function voteHandler(direction){
    if(direction === 'right'){
      setVoteAnimation('vote-right');
    }
    if(direction === 'left'){
      setVoteAnimation('vote-left');
    }

    if(currDog + 1 <= dogList.length - 1){
      setDogToggle(!dogToggle)
    }
  }
}

export default VotingPlatform