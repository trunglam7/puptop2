import React, { useContext, useState } from 'react'
import {AiOutlineClose, AiFillHeart} from 'react-icons/ai'


import './styles/VotingPlatform.css'
import DogCard from './DogCard'
import { AuthContext, DogContext } from '../App'
import { dogsList } from "../DogList";

const VotingPlatform = () => {

  const dogData = useContext(DogContext);
  const authCheck = useContext(AuthContext);
  const [voteAnimation, setVoteAnimation] = useState(null);
  const [currDog, setCurrDog] = useState(0);
  const [currDogData, setCurrDogData] = useState(0);

  const Dogs = () => {
    return (
      <>
        {!authCheck ? <p style={{marginBottom: '1.5rem'}}>DEMO : Login to Vote Real Dogs</p> : null}
        <DogCard
          voteAnimation={voteAnimation}
          name={authCheck ? dogData[currDogData]?.name : dogsList[currDog].name}
          image={authCheck ? dogData[currDogData]?.image : dogsList[currDog].image}
        />
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
          currDog <= Object.keys(authCheck ? dogData : dogsList).length - 1 ? <Dogs /> : <p>No Dogs to Vote</p>
        }
    </div>
  )

  function voteHandler(direction){
    if(direction === 'right'){
      if(authCheck) dogData[currDogData].score += 1;
      setVoteAnimation('vote-right');
    }
    if(direction === 'left'){
      if(authCheck) dogData[currDogData].score -= 1;
      setVoteAnimation('vote-left');
    }

    setTimeout(() => {
      setVoteAnimation(null);
      if(authCheck) {
        setCurrDogData(currDog + 1);
      }
      else{
        if(currDog + 1 > Object.keys(dogsList).length - 1){
          setCurrDog(0);
        }
        else{
          setCurrDog(currDog + 1);
        }
      }
    }, 500)

  }
}

export default VotingPlatform