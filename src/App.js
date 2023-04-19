import Header from "./components/Header";
import { createContext, useState } from "react";

import './App.css'
import Main from "./components/Main";
import Footer from "./components/Footer";
import { dogsList } from "./DogList";


export const AuthContext = createContext();
export const DogContext = createContext();

function App() {

  const [openMenu, setOpenMenu] = useState(false);
  const [login, setLogin] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  }

  const authHandler = () => {
    setLogin(true);
  }

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
