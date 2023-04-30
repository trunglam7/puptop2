import React, { useContext, useState } from 'react'
import {AiOutlineClose, AiFillHeart} from 'react-icons/ai'

import './styles/VotingPlatform.css'
import DogCard from './DogCard'
import { DogContext } from '../App'

const VotingPlatform = () => {

  const dogList = useContext(DogContext);
  const [voteAnimation, setVoteAnimation] = useState(null);
  const [currDog, setCurrDog] = useState(0);

  const Dogs = () => {
    return (
      <>
        <DogCard voteAnimation={voteAnimation} name={dogList[currDog].name} image={dogList[currDog].image}/>
        <div className='vote-btn-container'>
          <button className='vote-btn' onClick={() => voteHandler('left')}><AiOutlineClose size={'3rem'} color='red'/></button>
          <button className='vote-btn' onClick={() => voteHandler('right')}><AiFillHeart size={'3rem'} color='rgb(3, 255, 192)'/></button>
        </div>
      </>
    )
  }

  return (
    <div className='voting-container'>
        {
          currDog <= Object.keys(dogList).length - 1 ? <Dogs /> : <p>No Dogs to Vote</p>
        }
    </div>
  )

  function voteHandler(direction){
    if(direction === 'right'){
      dogList[currDog].score += 1;
      setVoteAnimation('vote-right');
    }
    if(direction === 'left'){
      dogList[currDog].score -= 1;
      setVoteAnimation('vote-left');
    }

    setTimeout(() => {
      setVoteAnimation(null);
      setCurrDog(currDog + 1);
    }, 500)

  }
}

export default VotingPlatform