import Header from "./components/Header";
import { createContext, useState } from "react";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';

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
  const [user] = useAuthState(auth);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  }

  const authHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    setLogin(true);
  }

  console.log(user);

  return (
    <>
      <AuthContext.Provider value={login}>
        <div className="App">
          <Header openMenuHandler={openMenuHandler} authHandler={authHandler}/>
          <DogContext.Provider value={dogsList}>
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
