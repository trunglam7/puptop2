import React, { useContext } from 'react'
import {GrAdd} from 'react-icons/gr'
import './styles/Footer.css'
import { AuthContext, DogContext } from '../App'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../backend/Firebase'

const Footer = () => {

  const AuthCheck = useContext(AuthContext);
  const dogData = useContext(DogContext);

  return (
    <footer className='add-container'>
        {AuthCheck ? <button className='add-button' onClick={() => addDog("Dolly")}><GrAdd size={'3rem'} /></button> : <p style={{padding: '14px'}}>Please Login to Add Dogs</p>}
    </footer>
  )

  // Function to add dogs
  function addDog(dogName) {
    const dogListSize = dogData['size'];
    const newDog = {
      name: dogName,
      score: 0
    }
    dogData[dogListSize + 1] = newDog;
    dogData['size'] = dogListSize + 1;
    console.log(dogData);
    updateDogDB().then(() => console.log("Update Complete")).catch(err => console.log("Update error:", err));
  }

  // Function to update dog database
  async function updateDogDB() {
    const docRef = doc(db, "DogList", "Dogs");
    await setDoc(docRef, dogData);
  }

}

export default Footer