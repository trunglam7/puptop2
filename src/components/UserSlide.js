import React, { useContext } from 'react'

import './styles/UserSlide.css'
import { AuthContext } from '../App'

const UserSlide = ({authHandler, signOutHandler}) => {

  const login = useContext(AuthContext);

  return (
    <aside className='user-menu'>
      {
        login ? <button className='login-btn' onClick={signOutHandler}>Sign Out</button>
        : <button className='login-btn' onClick={authHandler}>Sign In with Google</button>}
    </aside>
  )
}

export default UserSlide