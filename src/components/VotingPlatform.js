import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineClose, AiFillHeart} from 'react-icons/ai'

import './styles/VotingPlatform.css'
import DogCard from './DogCard'
import { AuthContext, DogContext } from '../App'
import { dogsList } from "../DogList";
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { app, db } from '../backend/Firebase'
import { getAuth } from 'firebase/auth'

const VotingPlatform = () => {

  const dogData = useContext(DogContext);
  const authCheck = useContext(AuthContext);
  const [voteAnimation, setVoteAnimation] = useState(null);
  const [currDogDemo, setCurrDogDemo] = useState(0);
  const [currDogData, setCurrDogData] = useState(0);

  const user = getAuth(app).currentUser?.uid;

  useEffect(() => {
    if(user){
      const docRef = doc(db, "users", user);
      const fetchUserData = async() => {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
          console.log("User found")
          setCurrDogData(docSnap.data().currVoteId);
        }
        else{
          console.log("No such document");
        }
      }

      fetchUserData().catch(err => console.log("Error fetching user data:", err))
    }
  }, [user])

  const Dogs = () => {
    return (
      <>
        {!authCheck ? <p style={{marginBottom: '1.5rem'}}>DEMO : Login to Vote Real Dogs</p> : null}
        <DogCard
          voteAnimation={voteAnimation}
          name={authCheck ? dogData[currDogData]?.name : dogsList[currDogDemo].name}
          image={authCheck ? dogData[currDogData]?.image : dogsList[currDogDemo].image}
        />
        <div className='vote-btn-container' style={{pointerEvents: voteAnimation ? 'none' : 'auto'}}>
          <button className='vote-btn' onClick={() => voteHandler('left')}><AiOutlineClose size={'3rem'} color='red'/></button>
          <button className='vote-btn' onClick={() => voteHandler('right')}><AiFillHeart size={'3rem'} color='rgb(3, 255, 192)'/></button>
        </div>
      </>
    )
  }

  return (
    <div className='voting-container'>
        {
          (authCheck ? currDogData : currDogDemo) <= Object.keys(authCheck ? dogData : dogsList).length - 2 ? <Dogs /> : <p>No Dogs to Vote</p>
        }
    </div>
  )

  function voteHandler(direction){
    if(direction === 'right'){
      if(authCheck){
        dogData[currDogData].score += 1;
      }
      setVoteAnimation('vote-right');
    }
    else if(direction === 'left'){
      if(authCheck) {
        dogData[currDogData].score -= 1;
      }
      setVoteAnimation('vote-left');
    }

    setTimeout(() => {
      setVoteAnimation(null);
      if(authCheck) {
        setCurrDogData(currDogData + 1);
        updateDogDB().then(() => console.log("Update Complete")).catch(err => console.log(err));
        updateUserCurrVoteId().then(() => console.log("Update user data complete")).catch(err => console.log(err));
      }
      else{
        if(currDogDemo + 1 > Object.keys(dogsList).length - 1){
          setCurrDogDemo(0);
        }
        else{
          setCurrDogDemo(currDogDemo + 1);
        }
      }
    }, 500)
  }

  async function updateDogDB() {
    const docRef = doc(db, "DogList", "Dogs");
    await setDoc(docRef, dogData);
  }

  async function updateUserCurrVoteId() {
    const docRef = doc(db, "users", user);
    await setDoc(docRef, {
      currVoteId: currDogData + 1});
  }
}

export default VotingPlatform