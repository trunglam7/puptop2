import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import {getAuth, signInWithPopup, GoogleAuthProvider, signInAnonymously, linkWithPopup, signOut} from 'firebase/auth';

import './App.css'
import Main from "./components/Main";
import Footer from "./components/Footer";
import { dogsList } from "./DogList";
import { app } from "./backend/Firebase";

export const AuthContext = createContext();
export const DogContext = createContext();

const auth = getAuth(app);

function App() {

  const [openMenu, setOpenMenu] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    signInAnonymously(auth).catch((err) => {
      const errorCode = err.code;
      const errorMsg = err.message;
      console.log(errorCode, errorMsg);
    })
  }, [])

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  }

  const authHandler = () => {
    const provider = new GoogleAuthProvider();
    linkWithPopup(auth.currentUser, provider).then(() => {
      setLogin(true);
    }).catch((err) => {
      signInWithPopup(auth, provider)
      console.log("Google Sign-In Failed: ", err);
    });
  }

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
          <DogContext.Provider value={dogsList}>
            <Header openMenuHandler={openMenuHandler} authHandler={authHandler} signOutHandler={signOutHandler}/>
            <Main />
          </DogContext.Provider>
          <Footer />
        </div>
      </AuthContext.Provider>
      <div className={openMenu ? "cover-active" : null}></div>
    </>
  );

}

export default App;
