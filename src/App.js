import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore'
import { db } from './backend/Firebase'

import './App.css'
import Main from "./components/Main";
import Footer from "./components/Footer";
import { app } from "./backend/Firebase";

export const AuthContext = createContext();
export const DogContext = createContext();

const auth = getAuth(app);

function App() {

  const [openMenu, setOpenMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const [dogData, setDogData] = useState({});

  const user = auth.currentUser?.uid;

  //Get Dog list from Firebase
  useEffect(() => {
    const docRef = doc(db, "DogList", "Dogs");

    const fetchDogData = async() => {
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        setDogData(docSnap.data());
      }
      else{
        console.log("No such document");
      }
    }

    fetchDogData().catch((err) => console.log("Error fetching data:", err));

  }, [])


  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  }

  // Function to sign in with Google
  const authHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      setLogin(true);
    }).catch((err) => {
      console.log("Google Sign-In Failed: ", err);
    });
  }

  // Function to sign out user
  const signOutHandler = () => {
    signOut(auth).then(() => {
      setLogin(false);
    }).catch((err) => {
      console.log('Unable to Sign Out: ', err);
    })
  }

  return (
    <>
      <AuthContext.Provider value={login}>
        <div className="App">
          <DogContext.Provider value={dogData}>
            <Header openMenuHandler={openMenuHandler} authHandler={authHandler} signOutHandler={signOutHandler}/>
            <Main />
            <Footer />
          </DogContext.Provider>
        </div>
      </AuthContext.Provider>
      <div className={openMenu ? "cover-active" : null}></div>
    </>
  );

}

export default App;
